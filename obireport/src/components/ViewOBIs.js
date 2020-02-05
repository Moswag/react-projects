import React, { Component } from 'react'
import { FaCalendarAlt, FaClock, FaFileAlt } from 'react-icons/fa';
import axios from 'axios'
import '../ViewObi.css'

export default class ViewUsers extends Component {

  state = {
    OBIFLIES: [],
    lasttime: null,
    isLoading: true,
    errors: null,
    obiDate: null
  };

  componentDidMount() {
    axios.get(`http://localhost:8081/api/obifiles`)
      .then(res => {
        const OBIFLIES = res.data;
        this.setState({ OBIFLIES });
      })

    axios.get(`http://localhost:8081/api/last_time`)
      .then(res => {
        const lasttime = res.data;
        this.setState({
          lasttime: lasttime
        });
      })


  }

  handleChange = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8081/api/obifiles/${this.state.date}`)
      .then(res => {
        const OBIFLIES = res.data;
        this.setState({ OBIFLIES });
      })
    console.log(this.state.obiDate);

  }


  render() {

    const obiList=this.state.OBIFLIES.length? (
      this.state.OBIFLIES.map(OBIFLIE =>{
          return (
        <tr key={OBIFLIE.fileid}>
          <td>{OBIFLIE.filename}</td>
          <td>{OBIFLIE.date}</td>
          <td>
            <span className={
              OBIFLIE.uploadstatus == 'Posted' ||
                OBIFLIE.uploadstatus == 'Split' ||
                OBIFLIE.uploadstatus == 'Completed' ? "badge badge-success" : "badge badge-danger"}>
              {OBIFLIE.uploadstatus}
              </span>
              </td>
              </tr>
              ) })) : (
      <div>No data for {this.state.date}</div>
    )

    return (
      <div>
        {/* Page header */}
        <div className="page-header page-header-light">
          <div className="page-header-content header-elements-md-inline">
            <div className="page-title d-flex">
              <h4><FaFileAlt size="20" /> <span className="font-weight-semibold">OBI </span> - FILES</h4>
              <a href="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more" /></a>
            </div>

          </div>
          <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
            <div className="d-flex">
              <div className="breadcrumb">
                <a href="index-2.html" className="breadcrumb-item">Home</a>
                <a href="datatable_advanced.html" className="breadcrumb-item">OBI</a>
                <span className="breadcrumb-item active">FILES</span>
              </div>
              <a href="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more" /></a>
            </div>
            <div className="header-elements d-none">
              <div className="breadcrumb justify-content-center">
                <a href="#" className="breadcrumb-elements-item">
                  <FaCalendarAlt />
                  Last Run Time:
        </a>
                <div className="breadcrumb-elements-item dropdown p-0">
                  <a href="#" className="breadcrumb-elements-item dropdown-toggle" data-toggle="dropdown">
                    <FaClock />
                    {this.state.lasttime}
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /page header */}

        {/* Content area */}
        <div className="content">
          {/* Page length options */}
          <div className="card">
            <br/>
            <div className="form">
              <form onSubmit={this.handleSubmit}>
                <input type="date" id="obiDate" onChange={this.handleChange} /> &nbsp;
                <button>Pick</button>
              </form>

            </div>
            <table className="table datatable-show-all">
              <thead>
                <tr>
                  <th>FILENAME</th>
                  <th>DATE</th>
                  <th>Status</th>

                </tr>
              </thead>
              <tbody>
                {
                  obiList
                }

              </tbody>
            </table>
          </div>
          {/* /page length options */}
        </div>
        {/* /content area */}
      </div>
    )
  }
}
