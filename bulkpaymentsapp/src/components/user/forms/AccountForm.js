import React, { Component } from "react";

class AccountForm extends Component {
  state = {
    accountNumber: "",
    numberOfApprovers: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="card">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>
                Account Number: <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="accountNumber"
                className="form-control required"
                placeholder="9999-999999-999"
                data-mask="9999-999999-999"
                value={this.state.accountNumber}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>
                Number of Approvers: <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                name="approvers"
                className="form-control required"
                placeholder="Number of approvers"
                value={this.state.numberOfApprovers}
                onChange={this.onChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountForm;
