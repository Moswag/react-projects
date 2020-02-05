import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faFile, faMouse } from '@fortawesome/free-solid-svg-icons'
import NavBar from './components/partials/NavBar';
import SideBar from './components/partials/SideBar';
import Footer from './components/partials/Footer';
import ViewOBIs from './components/ViewOBIs';


function App() {
  return (
    <div>

      <Router>

      <NavBar/>
{/* Page content */}
<div className="page-content">
  <SideBar/>
  {/* Main content */}
  <div className="content-wrapper">
    <Route exact path="/" component={ViewOBIs} />
    <Footer/>
   
  </div>
  {/* /main content */}
</div>
{/* /page content */}
</Router>
</div>

      );
}

library.add(fab, faCheckSquare, faCoffee, faFile, faMouse)
export default App;
