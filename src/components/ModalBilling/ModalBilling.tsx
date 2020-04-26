import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

import {
  useModalPaymentDispatch,
  useModalPaymentState,
} from '../../utilities/hooks/ModalPaymentContext/context';

import {
  SET_MODAL_VIEW,
  CLOSE_MODAL,
  SET_NAME,
  SET_EMAIL,
  SET_ADDRESS,
  SET_CITY,
  SET_STATE,
  SET_ZIPCODE,
} from '../../utilities/hooks/ModalPaymentContext/constants';


export const ModalBilling = () => {
  const dispatch = useModalPaymentDispatch();
  const { name, email, address, city, state, zipCode } = useModalPaymentState();

  const handleChange = (action: string, value: string) => {
    dispatch({ type: action, payload: value });
  };

  const openModal = (e: any) => {
    e.preventDefault();
    dispatch({ type: SET_MODAL_VIEW, payload: 2 });
  };

  const closeModal = (e: any) => {
    e.preventDefault();
    dispatch({ type: CLOSE_MODAL, payload: undefined });
  };

  return (
    <form className={classnames(styles.billingsContainer, 'modalForm--form')}>
      <div>
        <h2>Complete your donation</h2>
        <button className={'closeButton--close'} onClick={closeModal}>
          ×
        </button>
      </div>
      <p>Please add your payment information below</p>

      <h3>Billing Information</h3>
      <div className={styles.inputContainer}>
        <div className={classnames(styles.name, styles.column)}>
          <label htmlFor="name">Full name</label>
          <input
            name="name"
            type="text"
            className={'modalInput--input'}
            onChange={(e) => handleChange(SET_NAME, e.target.value)}
            value={name}
          />
        </div>
        <div className={classnames(styles.email, styles.column)}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            className={'modalInput--input'}
            onChange={(e) => handleChange(SET_EMAIL, e.target.value)}
            value={email}
          />
        </div>

        <label htmlFor="address">Address</label>
        <input
          name="address"
          type="text"
          className={'modalInput--input'}
          onChange={(e) => handleChange(SET_ADDRESS, e.target.value)}
          value={address}
        />
        <div className={styles.addressRow}>
          <div className={classnames(styles.column, styles.city)}>
            <label htmlFor="city">City</label>
            <input
              name="city"
              type="text"
              className={'modalInput--input'}
              onChange={(e) => handleChange(SET_CITY, e.target.value)}
              value={city}
            />
          </div>
          <div className={classnames(styles.column, styles.state)}>
            <label htmlFor="state">State</label>
            <input
              name="state"
              type="text"
              className={'modalInput--input'}
              onChange={(e) => handleChange(SET_STATE, e.target.value)}
              value={state}
            />
          </div>
          <div className={classnames(styles.column, styles.zipCode)}>
            <label htmlFor="zipCode">Zip Code</label>
            <input
              name="zipCode"
              type="text"
              className={'modalInput--input'}
              onChange={(e) => handleChange(SET_ZIPCODE, e.target.value)}
              value={zipCode}
            />
          </div>
        </div>
      </div>

      <div className={classnames(styles.btnRow, styles.row)}>
        <button
          type="button"
          className={classnames('modalButton--back', styles.backBtn)}
          onClick={() => dispatch({ type: SET_MODAL_VIEW, payload: 0 })}
        >
          ᐸ Back
        </button>
        <button
          type="button"
          className={classnames(styles.nextBtn, 'modalButton--filled')}
          onClick={openModal}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default ModalBilling;
