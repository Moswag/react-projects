import React, { Component } from 'react'

class UserInitiatorForm extends Component {
    state = {
        name: '',
        surname: '',
        nationalId: '',
        email: '',
        address: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="card">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label> Name: <span className="text-danger"> * </span></label>
                            <input type="text"
                                placeholder="Name"
                                className="form-control required"
                                name="name"
                                onChange={
                                    this.handleChange
                                }
                            /> </div> </div> <div className="col-md-6"> <div className="form-group">
                                <label> Surname: <span className="text-danger"> * </span></label>
                                <input type="text"
                                    placeholder="Surname"
                                    name="surname"
                                    className="form-control required"
                                    onChange={
                                        this.handleChange
                                    }
                                /> </div> </div> </div> <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label> National Id: <span className="text-danger"> * </span></label>
                            <input type="text"
                                placeholder="National Id"
                                name="nationalId"
                                className="form-control required"
                                onChange={
                                    this.handleChange
                                }
                            /> </div> </div> <div className="col-md-6"> <div className="form-group">
                                <label> Email: <span className="text-danger"> * </span></label>
                                <input type="text"
                                    placeholder="Email"
                                    name="email"
                                    className="form-control required"
                                    onChange={
                                        this.handleChange
                                    }
                                /> </div> </div> </div> <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label> Address: <span className="text-danger"> * </span></label>
                            <textarea placeholder="Address"
                                name="address"
                                className="form-control required"
                                onChange={
                                    this.handleChange
                                }> </textarea> </div> </div> </div> </div>

        )



    }
}


export default UserInitiatorForm