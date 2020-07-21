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
      addBillOpen: false,
      allBills: [
        {
          business_name: 'Geico',
          price: 150,
          status: 'unpaid'
        }
      ]
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
      allBills: newBills,
      addBillOpen: !this.state.addBillOpen
    }, () => {
      console.log(this.state)
    })
  }

  changeBillStatus = (billIndex) => {
    const allBills = this.state.allBills;
    let bill = allBills[billIndex];
    if (bill.status === 'unpaid') {
      bill.status = 'paid'
    } else {
      bill.status = 'unpaid'
    }

    const newState = update(this.state, {
      allBills: {
        $set: allBills
      }
    });

    this.setState(newState, () => {
      console.log(this.state)
    })
  }

  deleteBill = (billIndex) => {
    const allBills = this.state.allBills;
    allBills.splice(billIndex, 1);

    const newState = update(this.state, {
      allBills: {
        $set: allBills
      }
    });

    this.setState(newState);
  }



  render() {
    return (
      <div id="BillsApp">
        <Header />
        <Bills allBills={this.state.allBills} changeBillStatus={this.changeBillStatus} deleteBill={this.deleteBill} />
        <AddBill addBillOpen={this.state.addBillOpen} saveBill={this.saveBill} />
        <FloatingMenu clickAddBillBtn={this.clickAddBillBtn} />
      </div>
    );
  }
}

export default BillsApp;
