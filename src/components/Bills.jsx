import React, { Component } from "react";

class Bills extends Component {
  state = {};
  render() {
    return (
      <div id="Bills" className="container">
        <div className="total-bills">
          <div className="text">Total Amount</div>
          <div className="number">$850</div>
        </div>

        <ul className="bills-list">
          <li className="bill">
            <div className="company">
              <img className="logo" src="//logo.clearbit.com/netflix.com" />
              <div className="title">Netflix</div>
              <div className="price">-$9.99</div>
            </div>
          </li>
          <li className="bill">
            <div className="company">
              <img className="logo" src="//logo.clearbit.com/youtube.com" />
              <div className="title">Youtube</div>
              <div className="price">-$9.99</div>
            </div>
          </li>
          <li className="bill">
            <div className="company">
              <img className="logo" src="//logo.clearbit.com/disney.com" />
              <div className="title">Disney Plus</div>
              <div className="price">-$9.99</div>
            </div>
          </li>
          <li className="bill">
            <div className="company">
              <img
                className="logo"
                src="//logo.clearbit.com/americanexpress.com"
              />
              <div className="title">American Express</div>
              <div className="price">-$39.99</div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Bills;
