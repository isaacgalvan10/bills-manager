import React, { Component } from "react";
import Header from "./Header";
import Bills from "./Bills";
import FloatingMenu from "./FloatingMenu";

class BillsApp extends Component {
  render() {
    return (
      <div id="BillsApp">
        <Header />
        <Bills />
        <div className="content-background"></div>
        <FloatingMenu />
      </div>
    );
  }
}

export default BillsApp;
