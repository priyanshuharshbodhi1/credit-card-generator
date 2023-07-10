import React from 'react';
import './App.css';
import BgMainDesktop from './images/bg-main-desktop.png';

export default function App() {
  return (
    <div className="container">
      <div className="image-container">
        <img src={BgMainDesktop} alt="" />
      </div>
      <div className="form-container">
        <form>
          <div className="form-row">
            <label htmlFor="cardholder-name">Cardholder Name</label>
            <input type="text" id="cardholder-name" />
          </div>
          <div className="form-row">
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" />
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="expiry-date">Expiry Date</label>
              <input type="text" id="expiry-date" />
            </div>
            <div className="form-column">
              <label htmlFor="cvc">CVC</label>
              <input type="text" id="cvc" />
            </div>
          </div>
          <div className="form-row">
            <button type="submit">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  )
}
