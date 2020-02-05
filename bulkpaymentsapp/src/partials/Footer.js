import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* Footer */}
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="text-center d-lg-none w-100">
          <button type="button" className="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-footer">
            <i className="icon-unfold mr-2" />
            Footer
          </button>
        </div>
        <div className="navbar-collapse collapse" id="navbar-footer">
          <span className="navbar-text">
            © 2019. Bulk Payments by <Link to="https://www.zb.co.zw/" target="_blank">ZB Data Centre</Link>
          </span>
        </div>
      </div>
      {/* /footer */}
            </div>
        )
    }
}
