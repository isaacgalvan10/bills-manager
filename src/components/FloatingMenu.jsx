import React, { Component } from "react";

class FloatingMenu extends Component {
  render() {
    return (
      <nav id="FloatingMenu">
        <div className="link">
          <div className="add-button" onClick={this.props.clickAddBillBtn}>
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
