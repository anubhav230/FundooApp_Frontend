import React from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom'
import LoginIn from './components/Login'
import Error from './components/Error'


function App() {
    return (
        <Switch>
            <Route exact path="/" component={LoginIn}/>
            <Route component={Error}/>
        </Switch>
    );
}

export default App;