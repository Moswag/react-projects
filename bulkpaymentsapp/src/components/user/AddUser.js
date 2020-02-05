import React, { Component } from 'react'
import UserInitiatorForm from './forms/UserInitiatorForm'
import UserApproverForm from './forms/UserApproverForm'
import AccountForm from './forms/AccountForm'
import Footer from '../../partials/Footer'
import NavBar from '../../partials/NavBar'
import SideBar from '../../partials/SideBar'
import UserService from '../../service/UserService'

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {},
      users: {},
      message: null
    }
    this.saveUser = this.saveUser.bind(this);
  }

  addAccountOnChange = (account) => {
    this.setState({
      account: account
    })
  }

  addUserOnChange = (user) => {
    this.setState({
      users: user
    })
  }

  saveUser = (e) => {
    e.preventDefault();
    let user = { account: this.state.account, users: this.state.password };
    UserService.addUser(user)
      .then(res => {
        this.setState({ message: 'User added successfully.' });
        this.props.history.push('/view_users');
      });
  }

  onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });


  render() {
    return (


      <div>
        <NavBar />

        <div className="page-content">
          <SideBar />
          {/* Main content */}
          <div className="content-wrapper">
            {/* Page header */}
            <div className="page-header page-header-light">
              <div className="page-header-content header-elements-md-inline">
                <div className="page-title d-flex">
                  <h4><i className="fa fa-user-plus" /> <span className="font-weight-semibold">Company Account, Initiator, Approver</span></h4>
                  <a href="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more" /></a>
                </div>

              </div>
              <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
                <div className="d-flex">
                  <div className="breadcrumb">
                    <a href="#" className="breadcrumb-item"><i className="fa fa-home" /> Home</a>
                    <a href="#" className="breadcrumb-item">Company</a>
                    <span className="breadcrumb-item active">Account</span>
                  </div>
                  <a href="#" className="header-elements-toggle text-default d-md-none"><i className="fa icon-more" /></a>
                </div>

              </div>
            </div>
            {/* /page header */}
            {/* Content area */}
            <div className="content">
              {/* Wizard with validation */}
              <div className="card">
                <div className="card-header bg-white header-elements-inline">
                  <h6 className="card-title">Add User</h6>

                </div>
                <form className="wizard-form steps-validation" onSubmit={this.handeSubmit} data-fouc>
                  <h6>Company Data</h6>
                  <fieldset>

                    <AccountForm addAccountOnChange={this.addAccountOnChange} />

                  </fieldset>
                  <h6>Initiator</h6>
                  <fieldset>
                    <UserInitiatorForm addUserOnChange={this.addUserOnChange} />

                    <button onClick={this.addUser} className="btn btn-primary">Add new Initiator</button>

                  </fieldset>
                  <h6>Approver</h6>

                  <UserApproverForm />

                  <h6>Check For Correctness</h6>
                  <fieldset>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="d-block">Applicant resume:</label>
                          <input type="file" name="resume" className="form-input-styled" data-fouc />
                          <span className="form-text text-muted">Accepted formats: pdf, doc. Max file size 2Mb</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Where did you find us? <span className="text-danger">*</span></label>
                          <select name="source" data-placeholder="Choose an option..." className="form-control form-control-select2 required" data-fouc>
                            <option />
                            <option value="monster">Monster.com</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="google">Google</option>
                            <option value="adwords">Google AdWords</option>
                            <option value="other">Other source</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Availability: <span className="text-danger">*</span></label>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="radio" name="availability" className="form-input-styled required" data-fouc />
                              Immediately
                  </label>
                          </div>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="radio" name="availability" className="form-input-styled" data-fouc />
                              1 - 2 weeks
                  </label>
                          </div>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="radio" name="availability" className="form-input-styled" data-fouc />
                              3 - 4 weeks
                  </label>
                          </div>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="radio" name="availability" className="form-input-styled" data-fouc />
                              More than 1 month
                  </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Additional information:</label>
                          <textarea name="additional-info" rows={5} cols={5} placeholder="If you want to add any info, do it here." className="form-control" defaultValue={""} />
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
              {/* /wizard with validation */}
            </div>
            {/* /content area */}

            <Footer />
          </div>
          {/* /main content */}
        </div>
        {/* /page content */}

      </div>

    )
  }
}

export default AddUser
