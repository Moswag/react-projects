import React from 'react'

const UserTable=({users})=> {

    const userList =users.map(user=>{
        return (
        <tr key={user.id}>
        <td>{user.id}</td>
        <td><a href="#">{user.name}</a></td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td><span className="badge badge-success">Active</span></td>
        <td className="text-center">
          <div className="list-icons">
            <div className="dropdown">
              <a href="#" className="list-icons-item" data-toggle="dropdown">
                <i className="icon-menu9" />
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="#" className="dropdown-item"><i className="icon-file-pdf" /> Export to .pdf</a>
                <a href="#" className="dropdown-item"><i className="icon-file-excel" /> Export to .csv</a>
                <a href="#" className="dropdown-item"><i className="icon-file-word" /> Export to .doc</a>
              </div>
            </div>
          </div>
        </td>
      </tr>
        )
    })
    return (
        
      <table className="table datatable-show-all" >
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Job Title</th>
          <th>DOB</th>
          <th>Status</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
          {userList}
      </tbody>
    </table>
  
    )
}

export default UserTable
