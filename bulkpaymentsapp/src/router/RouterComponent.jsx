import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ViewUsers from "../components/user/ViewUsers";
import AddUser from "../components/user/AddUser";
import Login from "../components/auth/Login";


const AppRouter = () => {
    return(
            <Router>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route exact path="/view_users" component={ViewUsers}/>
                        <Route exact path="/add_user" component={AddUser}/>  
                    </Switch>
            </Router>
    )
}

export default AppRouter;