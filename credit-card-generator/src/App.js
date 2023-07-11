import React from "react";
import "./App.css";
import BgMainDesktop from "./images/bg-main-desktop.png";

export default function App() {
  return (
    <div className="container">
      <div className="image-container">
        <img src={BgMainDesktop} alt="" />
      </div>
      <div className="form-container">
        <form>
          <div className="form-row">
            <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
            <input
              type="text"
              id="cardholder-name"
              placeholder="e.g. Jane Appleseed"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="card-number">CARD NUMBER</label>
            <input
              type="number"
              id="card-number"
              maxLength={19}
              placeholder="1234 5678 9012 3456"
              inputMode="numeric"
              onWheel={(e) => e.currentTarget.blur()}
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
                />
                <input
                  type="number"
                  id="expiry-date"
                  min={23}
                  max={32}
                  placeholder="YY"
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
              />
            </div>
          </div>
          <div className="form-row submit-button">
            <button type="submit">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
}
