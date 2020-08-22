import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useParams, useHistory} from "react-router-dom"

import {
  getPassportTickets,
  getParticipatingSeller,
  sendRedeemTicketsEmail
} from '../../utilities/api/interactionManager';
import { PassportContainer, Title, SubTitle, Button } from "./style";

import TicketRow from "./TicketRow";
import FAQ from "./Faq";

import PassportIconImg from "./passportIcon.png";
import CircleLogo from './CircleLogo.png';

interface Props {
  setCurrentScreenView: Function;
};

const Passport = (props: Props) => {
  const { id } = useParams();
  const { push, location } = useHistory();
  const [showFaq, setShowFaq] = useState(false);
  const [showEmailSent, setShowEmailSent] = useState(false);
  const [tickets, setTickets] = useState<any[]>([]);

  useEffect(() => {    
    if (location.hash === "#faq") {
      setShowFaq(true);
    }
  }, [location.hash])

  useEffect(() => {    
    if (id) {
      getPassportTickets(id)
        .then((ticketIds) => {
          let promises: any[] = [];
          ticketIds.data.forEach(ticket => {
            promises.push(
              getParticipatingSeller(ticket.participating_seller_id)
                .then((seller) => ({
                    stamp_url: seller.data.stamp_url,
                    ...ticket
                  })
                ));
          });
          
          return Promise.all(promises);
        })
        .then((passportTickets) => {
          if (passportTickets.length > 0) {
            setTickets(passportTickets);
          }
        })
        .catch((err) => {
          console.log("passport error: "+err);
        })
    }
  }, [id])

  const createTicketRows = (tickets) => {
    function groupBy(array, key) {
      return array.reduce((rv, x) => {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };
    
    const tempTickets = [...tickets];
    const sortedTickets = tempTickets
      .sort((a,b) => {
        return (b.sponsor_seller_id - a.sponsor_seller_id );
      })
      .sort((a,b) => {
        const dateA = a.redeemed_at ? Date.parse(a.redeemed_at) : 0;
        const dateB = b.redeemed_at ? Date.parse(b.redeemed_at) : 0;
        return (dateB - dateA);
      })
    let rows: any[] = [];
    
    const groupedTickets = groupBy(sortedTickets, "sponsor_seller_id");
    const newEntries = Object.keys(groupedTickets);
    // console.log(newEntries)

    sortedTickets.push({
      contact_id: 11,
      created_at: "2020-08-25T01:01:50.857Z",
      expiration: null,
      id: 1,
      participating_seller_id: 1,
      redeemed_at: "2020-08-24",
      sponsor_seller_id: 1,
      stamp_url: "http://example.com/placeholder.jpg",
      ticket_id: "7MRJV",
      updated_at: "2020-08-25T01:23:06.038Z"}
      )
    for(const entry of newEntries){
      const arrays = entry === "null" ? sortedTickets.filter((ticket) => !ticket.sponsor_seller_id)
                   : sortedTickets.filter((ticket) => ticket.sponsor_seller_id === parseInt(entry));      
      while (arrays.length) {
        rows.push(arrays.splice(0, 3));
      }
    }
    
    return rows;
  }

  const sendEmail = () => {
    sendRedeemTicketsEmail(id)
      .then((res) => {
        setShowEmailSent(true);
      })
  }

  const createRows = (stamps) => {
    const rows = createTicketRows(stamps);
    return (
      <Table> 
        <tbody>
          {
            rows.map((row, index) => (
              <TicketRow stamps={row} index={index} key={index} sendEmail={sendEmail}/>
            ))
          } 
        </tbody>        
      </Table>
    )
  }

  const addTicket = (e) => {
    e.preventDefault();
    push("/passport");
  }

  return (
    <Container>
      <HeaderContainer>
        <RedirectionLinks href="#">Learn More</RedirectionLinks>
        <Logo src={CircleLogo} alt="scl-log" />
        <RedirectionLinks href="#">contact us</RedirectionLinks>
      </HeaderContainer>
      <BodyContainer>
        <FAQ showFaq={showFaq} toggleView={() => setShowFaq(true)}/>
        <PassportContainer 
          mainView={!showFaq} 
          onClick={() => setShowFaq(false)}
        >
          <TitleRow>
            <Title>PASSPORT TO CHINATOWN</Title>
            <SubTitle>9/1/20202 - 9/30/20</SubTitle>
          </TitleRow>
            
          { showEmailSent && (
              <SendEmailContainer>
                <PassportIcon src={PassportIconImg}/>
                <TitleRow>
                  <Title>REWARD EMAIL SENT</Title>
                  <SubTitle bold="700">Check your inbox shortly for a link to access your available rewards!</SubTitle>                
                </TitleRow>
                <SendEmailButtonClose 
                  className="button--red-filled"
                  onClick={e => setShowEmailSent(false)}
                > 
                  CLOSE 
                </SendEmailButtonClose>
              </SendEmailContainer>
            ) 
          }
            {tickets.length > 0 && createRows(tickets)}
          <AddNewTicket
            value="track-screen-button"
            className="button--filled"
            onClick={addTicket}
          >
            Add New Ticket
          </AddNewTicket>
        </PassportContainer>
      </BodyContainer>      
    </Container>
  );
};

export default Passport;

const Container = styled.div`
  position: relative;
  width: 375px;
  hidden: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 12px auto;
`
const RedirectionLinks = styled.a`
  text-transform: uppercase;
  color: black;
  font-weight: bold;
  letter-spacing: .15em;
  font-size: 12px;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  filter: drop-shadow(0 0mm 2px #cdcdcd);
`;

const BodyContainer = styled.div`
  width: 375px;
  position: relative;
  display: flex;
  justify-content: center;
`

const TitleRow = styled.div`
  text-align: center;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 12px;
`;
const AddNewTicket = styled(Button)`
  position: fixed;
  margin-left: -150px;
  bottom: 10px;
  left: 50%;
  width: 300px;
`
const SendEmailContainer = styled.div`
  position: fixed;
  width: 340px;
  margin: 0 auto;
  height: 260px;
  z-index: 20;  
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;;
  align-items: center;

  background: #F2EAE8;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
`;
const PassportIcon = styled.img`
  width: 59px;
  height: 76px;
`;
const SendEmailButtonClose = styled(Button)`
  height: 32px;
  width: 115px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`
  