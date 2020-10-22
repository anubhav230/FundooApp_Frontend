import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginIn from './components/pages/Login'
import Error from './components/pages/Error'
import SignUp from './components/pages/Register'
import ForgetPassword from './components/pages/ForgetPassword'
import ResetPassword from './components/pages/ResetPassword'
import Dashboard from './components/pages/Dashboard'
import CreateNote from './components/CreateNote'
import Demo from './components/Demo'

function Routing() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginIn} />
                <Route path="/register" component={SignUp} />
                <Route path="/forgetpassword" component={ForgetPassword} />
                <Route path="/reset-password" component={ResetPassword} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/dashboard/notes" component={CreateNote} />
                <Route component={Error} />
            </Switch>
        </Router>
    );
}

export default Routing;