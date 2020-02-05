import React, { Component } from 'react'
import Footer from './partials/Footer';
import { Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faFile, faMouse, faUser } from '@fortawesome/free-solid-svg-icons'
import SideBar from './partials/SideBar';
import ViewUsers from './components/user/ViewUsers';
import AddUser from './components/user/AddUser';
import NavBar from './partials/NavBar';
import AppRouter from './router/RouterComponent';

class App extends Component {
  render() {
    return (
      // <div>
          
      //     <NavBar />
      //     {/* Page content */}
      //     <div className="page-content">
      //       <SideBar />
      //       {/* Main content */}
      //       <div className="content-wrapper">
      //         <Route exact path="/view_users" component={ViewUsers}/>
      //         <Route exact path="/add_user" component={AddUser}/>  
      //         <Footer />
      //       </div>
      //       {/* /main content */}
      //     </div>
      //     {/* /page content */}
         
      // </div>

      <AppRouter/>

    )
  }
}

library.add(fab, faCheckSquare, faCoffee, faFile, faMouse, faUser)
export default App