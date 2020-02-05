import React from 'react'

export default function UserApproverForm() {
    return (
          
        <fieldset>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Name: <span className="text-danger">*</span></label>
                <input type="text"  placeholder="Name" className="form-control required" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Surname: <span className="text-danger">*</span></label>
                <input type="text"  placeholder="Surname" className="form-control required" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>National Id: <span className="text-danger">*</span></label>
                <input type="text"  placeholder="National Id" className="form-control required" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Email: <span className="text-danger">*</span></label>
                <input type="text"  placeholder="Email" className="form-control required" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Address: <span className="text-danger">*</span></label>
                <textarea   placeholder="Address" className="form-control required" ></textarea>
              </div>
            </div>
          </div>
          
        </fieldset>
       
    )
}
