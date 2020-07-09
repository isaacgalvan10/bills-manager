import React, { Component } from "react";

class FloatingMenu extends Component {
  render() {
    return (
      <nav id="FloatingMenu">
        <div className="link">
          <div className="icon">
            <i className="fas fa-credit-card"></i>
          </div>
          <div className="text">Spend</div>
        </div>
        <div className="link">
          <div className="icon">
            <i className="fas fa-piggy-bank"></i>
          </div>
          <div className="text">Save</div>
        </div>
        <div className="link">
          <div className="icon">
            <i className="fas fa-exchange-alt"></i>
          </div>
          <div className="text">Transfer</div>
        </div>
        <div className="link">
          <div className="icon">
            <i className="fas fa-cog"></i>
          </div>
          <div className="text">Settings</div>
        </div>
        <div className="link">
          <div className="add-button">
            <div className="icon">
              <i className="fas fa-plus"></i>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default FloatingMenu;
