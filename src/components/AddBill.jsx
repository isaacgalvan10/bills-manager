import React, { Component } from "react";

class AllBills extends Component {
  constructor() {
    super();
    this.state = {
      business_name: '',
      price: 0
    };
  }

  inputChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;

    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.saveBill(this.state)
    console.log(this.state);
  }

  render() {
    return (
      <section id="AddBill" className={`${this.props.addBillOpen == true ? `active` : ``}`}>
        <div className="container">
          <h2>Add Bill</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="business_name">Business Name</label>
              <input type="text" id="business_name" name="business_name" onChange={this.inputChange} value={this.state.business_name} />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input type="text" id="price" name="price" onChange={this.inputChange} value={this.state.business_price} />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </section>
    );
  }
}

export default AllBills;
