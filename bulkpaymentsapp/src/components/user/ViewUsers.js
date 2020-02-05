import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import UserTable from './forms/UserTable'
import axios from 'axios'
import NavBar from '../../partials/NavBar'
import Footer from '../../partials/Footer'
import SideBar from '../../partials/SideBar'


class ViewUsers extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

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
      <h4><i className="fa fa-table" /> <span className="font-weight-semibold">Users</span></h4>
      <a href="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more" /></a>
    </div>
    
  </div>
  <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
    <div className="d-flex">
      <div className="breadcrumb">
        <Link to="/"> Home /</Link>
        <Link to="/view_users">View Users</Link>
      </div>
      <a href="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more" /></a>
    </div>
    
  </div>
</div>
{/* /page header */}

  {/* Content area */}
  <div className="content">
    {/* Page length options */}
    <div className="card">
            <UserTable users={this.state.users} />
    </div>
    {/* /page length options */}
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

export default ViewUsers;
