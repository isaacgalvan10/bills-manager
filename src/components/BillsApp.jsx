import React, { Component } from "react";
import Header from "./Header";
import Bills from "./Bills";
import FloatingMenu from "./FloatingMenu";
import AddBill from "./AddBill";
import update from 'immutability-helper';

class BillsApp extends Component {
  constructor() {
    super();
    this.state = {
      addBillOpen: true,
      allBills: []
    }
  }

  clickAddBillBtn = () => {
    this.setState({
      addBillOpen: !this.state.addBillOpen
    })
  };

  saveBill = (bill) => {
    const newBills = update(this.state.allBills, {
      $push: [bill]
    })
    this.setState({
      allBills: newBills
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return (
      <div id="BillsApp">
        <Header />
        <Bills />
        <AddBill addBillOpen={this.state.addBillOpen} saveBill={this.saveBill} />
        <div className="content-background"></div>
        <FloatingMenu clickAddBillBtn={this.clickAddBillBtn} />
      </div>
    );
  }
}

export default BillsApp;
