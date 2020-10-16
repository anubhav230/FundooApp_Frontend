import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginIn from './components/Login'
import Error from './components/Error'
import SignUp from './components/Register'
import ForgetPassword from './components/ForgetPassword'
import ResetPassword from './components/ResetPassword'
import Dashboard from './components/Dashboard'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginIn} />
                <Route path="/register" component={SignUp} />
                <Route path="/forgetpassword" component={ForgetPassword} />
                <Route path="/reset-password" component={ResetPassword} />
                <Route path="/dashboard" component={Dashboard} />
                <Route component={Error} />
            </Switch>
        </Router>
    );
}

export default App;