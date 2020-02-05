import React, { Component } from 'react'
import { FaBars,FaUserAlt } from 'react-icons/fa';


export default class NavBar extends Component {
    render() {
        return (
            <div>
                 {/* Main navbar */}
  <div className="navbar navbar-expand-md navbar-dark">
    <div className="navbar-brand">
      <a href="index-2.html" className="d-inline-block">
        <img src="assets/images/logo.png" alt="mos" />
      </a>
    </div>
    <div className="d-md-none">
     
      <button className="navbar-toggler sidebar-mobile-main-toggle" type="button">
        <i className="icon-paragraph-justify3" />
      </button>
    </div>
    <div className="collapse navbar-collapse" id="navbar-mobile">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
          <FaBars />
          </a>
        </li>
 
      
      </ul>
      <span className="badge bg-success ml-md-3 mr-md-auto">Online</span>
      <ul className="navbar-nav">
   
        <li className="nav-item dropdown dropdown-user">
          <a href="#" className="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">
            <img src="https://avatars2.githubusercontent.com/u/28354857?s=460&v=4" className="rounded-circle mr-2" height={34} alt="webster" />
            <span>Webster Moswa</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a href="#" className="dropdown-item"><FaUserAlt />&nbsp; Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  {/* /main navbar */}
            </div>
        )
    }
}
