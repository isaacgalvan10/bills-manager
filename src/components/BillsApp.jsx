import React, { Component } from "react";
import Header from "./Header";
import Bills from "./Bills";

class BillsApp extends Component {
  render() {
    return (
      <div id="BillsApp">
        <Header />
        <Bills />
      </div>
    );
  }
}

export default BillsApp;
