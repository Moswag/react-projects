import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import {Route, Link, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class SideBar extends Component {
    render() {
        return (
            <div>
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
                <a href="#">
                  <img src="https://avatars2.githubusercontent.com/u/28354857?s=460&v=4" width={38} height={38} className="rounded-circle" alt="moswa" /></a>
              </div>
              <div className="media-body">
                <div className="media-title font-weight-semibold">Webster Moswa</div>
                <div className="font-size-xs opacity-50">
                  <i className="fa fa-spinner fa-spin" /> &nbsp;OBI Report
                  
                </div>
              </div>
              <div className="ml-3 align-self-center">
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon="mouse"/>
                  </a>
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
      

            <li className="nav-item active">
                <NavLink to="/" className="nav-link">
                
                <FontAwesomeIcon icon="file" pull="left" />&nbsp;
                <span>OBI Files</span>
                </NavLink>
                
                </li>
            
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
