import React, { useState } from 'react';
import styled from 'styled-components';

import TrackScreen from './TrackScreen';
import RedemptionSelectScreen from './RedemptionSelectScreen';
import ScreenName from "./ScreenName";
import PassportScreen from './Passport';
import CrawlMap from './CrawlMap.png';

interface Props {
  screen: ScreenName
}

const PassportRedemption = (props: Props) => {
  const [currentScreenView, setCurrentScreenView] = useState<ScreenName>(props.screen);

  const showCurrentScreen = (screen) => {
    // TODO: Update case #s when all screens are built out
    // NOTE: not sure if this is the right flow, 
    // but currently set up like this for now for ease of editing
    switch(screen) {
      case ScreenName.Redemption: 
        return <RedemptionSelectScreen setCurrentScreenView={setCurrentScreenView} />
      case ScreenName.Track:
        return <TrackScreen setCurrentScreenView={setCurrentScreenView} />
      case ScreenName.Dashboard: 
        return <PassportScreen setCurrentScreenView={setCurrentScreenView}/>
      default: 
        return <TrackScreen setCurrentScreenView={setCurrentScreenView} />
    }
  };

  return (
    <Container>     
      {
        showCurrentScreen(currentScreenView)
      }
      
    </Container>
  );
};

export default PassportRedemption;

const Container = styled.div`
  // position: relative;
  background-color: #e5e5e5;
  height: 100%;
  min-height: 100vh;
  background-image: url(${CrawlMap});
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 475px) {
    background-size: 500px;
  }
`;