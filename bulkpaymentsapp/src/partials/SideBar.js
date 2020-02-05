import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { FaBars, FaUserAlt,FaUser, FaPiggyBank, FaCocktail, FaBuilding, FaFileCsv, FaFile, FaEraser, FaAddressBook } from 'react-icons/fa';
import user from '../user.png'

export default class SideBar extends Component {



    render() {

      
        return (
            <div style={{ backgroundColor: '#1C1615' }}>
                {/* Main sidebar */}
    <div className="sidebar sidebar-dark sidebar-main sidebar-expand-md">
      {/* Sidebar mobile toggler */}
      <div className="sidebar-mobile-toggler text-center">
        <a href="#" className="sidebar-mobile-main-toggle">
          <i className="icon-arrow-left8" />
        </a>
        Navigation
        <a href="#" className="sidebar-mobile-expand">
          <i className="icon-screen-full" />
          <i className="icon-screen-normal" />
        </a>
      </div>
      {/* /sidebar mobile toggler */}
      {/* Sidebar content */}
      <div className="sidebar-content">
        {/* User menu */}
        <div className="sidebar-user">
          <div className="card-body">
            <div className="media">
              <div className="mr-3">
                <a href="#"><img src={user} width={38} height={38} className="rounded-circle" alt="taps" /></a>
              </div>
              <div className="media-body">
                <div className="media-title font-weight-semibold">Webster Moswa</div>
                <div className="font-size-xs opacity-50">
                  <i className="fa fa-universal-access" /> &nbsp;Admin
                  
                </div>
              </div>
              <div className="ml-3 align-self-center">
                <a href="#" className="text-white"><i className="fa fa-handshake-o"/></a>
              </div>
            </div>
          </div>
        </div>
        {/* /user menu */}
        {/* Main navigation */}
        <div className="card card-sidebar-mobile">
          <ul className="nav nav-sidebar" data-nav-type="accordion">
            {/* Main */}
            <li className="nav-item-header"><div className="text-uppercase font-size-xs line-height-xs">Main</div> <i className="icon-menu" title="Main" /></li>
          
            <li className="nav-item nav-item-submenu">
              <Link to="#" className="nav-link"><i className="fa fa-user"/> <span>Client</span></Link>
              <ul className="nav nav-group-sub" >
                <li className="nav-item">
                  <NavLink to="/add_user" className="nav-link">Add Client</NavLink>
                  </li>
                <li className="nav-item">
                <NavLink to="/view_users" className="nav-link">View CLients</NavLink>
                 </li>
                 </ul>
            </li>
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link"><i className="fa fa-building"/><span>Suspense Accounts</span></a>
              <ul className="nav nav-group-sub" data-submenu-title="Themes">
                <li className="nav-item"><Link to="#" className="nav-link active">Company</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link">Agents</Link></li>
              </ul>
            </li>
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link"><i className="fa fa-file"/><span>Bulk Types</span></a>
              <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                <li className="nav-item"><Link to="#" className="nav-link">Ewallet</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link">CBS</Link></li>
                <li className="nav-item"><Link to="" className="nav-link">Ecocash</Link></li>
                </ul>
                </li>

                
            
            <li className="nav-item">
              <Link to="#" className="nav-link">
              <i className="fa fa-file-code-o"/>
                <span>Bulk Exceptions</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link"><i className="fa fa-file-o"/>  <span>Bulks</span></Link></li>
            {/* /main */}


  

          </ul>
        </div>
        {/* /main navigation */}
      </div>
      {/* /sidebar content */}
    </div>
    {/* /main sidebar */}
            </div>
        )
    }
}
