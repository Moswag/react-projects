import React, { Component } from 'react'
import { FaBars} from 'react-icons/fa';
import user from '../user.png'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        {/* Main navbar */}
        <div className="navbar navbar-expand-md navbar-dark">
          <div className="navbar-brand">
            <a href="index-2.html" className="d-inline-block">
              <img src="assets/images/bp.png" alt="Bulk Payments" />
            </a>
          </div>
          <div className="d-md-none">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
              <i className="icon-tree5" />
            </button>
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

              <li className="nav-item dropdown">
                <a href="#" className="navbar-nav-link dropdown-toggle caret-0" data-toggle="dropdown">
                  <i className="fa fa-bell" />
                  <span className="d-md-none ml-2">Notifications</span>
                  <span className="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-content wmin-md-350">
                  <div className="dropdown-content-header">
                    <span className="font-weight-semibold">Notifications</span>
                    <a href="#" className="text-default"><i className="icon-compose" /></a>
                  </div>
                  <div className="dropdown-content-body dropdown-scrollable">
                    <ul className="media-list">
                      <li className="media">
                        <div className="mr-3 position-relative">
                          <img src="http://demo.interface.club/limitless/demo/Template/global_assets/images/demo/users/face10.jpg" width={36} height={36} className="rounded-circle" alt="webster" />
                        </div>
                        <div className="media-body">
                          <div className="media-title">
                            <a href="#">
                              <span className="font-weight-semibold">James Alexander</span>
                              <span className="text-muted float-right font-size-sm">04:58</span>
                            </a>
                          </div>
                          <span className="text-muted">who knows, maybe that would be the best thing for me...</span>
                        </div>
                      </li>
                      <li className="media">
                        <div className="mr-3 position-relative">
                          <img src="http://demo.interface.club/limitless/demo/Template/global_assets/images/demo/users/face3.jpg" width={36} height={36} className="rounded-circle" alt="timmy" />
                        </div>
                        <div className="media-body">
                          <div className="media-title">
                            <a href="#">
                              <span className="font-weight-semibold">Margo Baker</span>
                              <span className="text-muted float-right font-size-sm">12:16</span>
                            </a>
                          </div>
                          <span className="text-muted">That was something he was unable to do because...</span>
                        </div>
                      </li>

                    </ul>
                  </div>
                  <div className="dropdown-content-footer justify-content-center p-0">
                    <a href="#" className="bg-light text-grey w-100 py-2" data-popup="tooltip" title="Load more"><i className="icon-menu7 d-block top-0" /></a>
                  </div>
                </div>
              </li>


              <li className="nav-item dropdown dropdown-user">
                <a href="#" className="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">
                  <img src={user} className="rounded-circle mr-2" height={34} alt="moswa" />
                  <span>Webster Moswa</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="#" className="dropdown-item"><i className="fa fa-user" /> My profile</a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item"><i className="fa fa-cog" /> Change Password</a>
                  <Link className="dropdown-item" to="/"><i className="fa fa-arrow-left" />Logout</Link>
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
