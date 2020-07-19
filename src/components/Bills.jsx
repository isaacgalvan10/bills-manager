import React, { Component } from "react";

class Bills extends Component {
  constructor() {
    super();
    this.state = {};
  }

  showAllBills = () => {
    const bills = this.props.allBills;
    if (bills.length > 0) {
      return bills.map((bill, index) => {
        return (
          <li className={`bill ${bill.status === 'paid' ? 'active' : ''}`} key={index}>
            <div className="company">
              <div className="logo">
                <img src="//logo.clearbit.com/netflix.com" />
                <div className="title">{bill.business_name}</div>
              </div>
              <div className="price">-${bill.price}</div>
              <div className="buttons">
                <div className="paid" onClick={this.props.changeBillStatus.bind(null, index)}><i className="fas fa-check"></i></div>
                <div className="delete" onClick={this.props.deleteBill.bind(null, index)}><i className="fas fa-trash"></i></div>
              </div>
            </div>
          </li>
        )
      })
    } else {
      return (
        <li className="bill">
          <div className="no-bills">No bills. Please add a bill</div>
        </li>
      )
    }
  };

  totalAmount = () => {
    const bills = this.props.allBills;
    let total = 0;

    for (let i = 0; i < bills.length; i++) {
      total += parseInt(bills[i].price);
    }
    if (bills.length > 0) {
      return total
    } else {
      return 0
    }
  }

  render() {
    return (
      <div id="Bills" className="container disable-scrollbars">
        <div className="total-bills">
          <div className="text">Total Amount</div>
          <div className="number">-${this.totalAmount()}</div>
        </div>

        <ul className="bills-list">
          {this.showAllBills()}
        </ul>
      </div>
    );
  }
}

export default Bills;
