import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginIn from './components/Login'
import Error from './components/Error'
import SignUp from './components/Register'
import ForgetPassword from './components/ForgetPassword'
import ResetPassword from './components/ResetPassword'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginIn} />
                <Route exact path="/register" component={SignUp} />
                <Route exact path="/forgetpassword" component={ForgetPassword} />
                <Route path="/reset-password" component={ResetPassword} />
                <Route component={Error} />
            </Switch>
        </Router>
    );
}

export default App;