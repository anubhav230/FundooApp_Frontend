import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginIn from './components/pages/Login'
import Error from './components/pages/Error'
import SignUp from './components/pages/Register'
import ForgetPassword from './components/pages/ForgetPassword'
import ResetPassword from './components/pages/ResetPassword'
import Dashboard from './components/pages/Dashboard'
import CreateNote from './components/CreateNote'
import Demo from './components/Demo'
import Routing from './router'


function App() {
    return ( <
        div >
        <
        Routing / >
        <
        /div>
    );
}

export default App;