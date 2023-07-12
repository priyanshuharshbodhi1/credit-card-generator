import React, { useState } from "react";
import "./App.css";
import BgMainDesktop from "./images/bg-main-desktop.png";
import CardLogo from "./images/card-logo.svg";
import Tick from "./images/icon-complete.svg";

export default function App() {
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState("JANE APPLESEED");
  const [cardNumber, setCardNumber] = useState("1234 1234 1234 1234");
  const [month, setMonth] = useState("01");
  const [year, setYear] = useState("23");
  const [cvc, setCvc] = useState("123");

  return (
    <div className="container">
      <div className="image-container">
        <img src={BgMainDesktop} alt="" />
        <div className="front-card">
          <div className="front-card-internals">
            <img src={CardLogo} alt="" />

            <h2>{cardNumber}</h2>

            <div className="last-column">
              <div>{name}</div>
              <div>{month}/{year}</div>
            </div>
          </div>
        </div>
        <div className="back-card">
          <div className="card-cvc">{cvc}</div>
        </div>
      </div>
      {/* <card /> */}
      <div className="form-container">
        {!confirmed && (
          <form>
            <div className="form-row">
              <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
              <input
                type="text"
                id="cardholder-name"
                placeholder="e.g. Jane Appleseed"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label htmlFor="card-number">CARD NUMBER</label>
              <input
                type="number"
                id="card-number"
                maxLength={19}
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="form-row line-three">
              <div className="form-column">
                <label htmlFor="expiry-date">EXP. DATE (MM/YY)</label>
                <div className="expiry-date">
                  <input
                    type="number"
                    id="expiry-date"
                    min={1}
                    max={12}
                    placeholder="MM"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  />
                  <input
                    type="number"
                    id="expiry-date"
                    min={23}
                    max={32}
                    placeholder="YY"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-column">
                <label htmlFor="cvc">CVC</label>
                <input
                  type="number"
                  id="cvc"
                  placeholder="e.g. 123"
                  maxLength={3}
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row submit-button">
              <button type="submit" onClick={() => setConfirmed(true) }>Confirm</button>
            </div>
          </form>
        )}
        {confirmed && <ThankYou setConfirmed={setConfirmed} />}
      </div>
    </div>
  );
}

//

const ThankYou = ({ setConfirmed }) => {
  return (
    <div className="thank-you-page">
      <img src={Tick} alt="" />
      <h1>THANK YOU!</h1>
      <h5>We've added your card details</h5>
      <div className="form-row submit-button thank-you-button">
        <button onClick={() => setConfirmed(false)}>Continue</button>
      </div>
    </div>
  );
};
