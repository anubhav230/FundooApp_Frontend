import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginIn from './components/Login'
import Error from './components/Error'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginIn} />
                <Route component={Error} />
            </Switch>
        </Router>
    );
}

export default App;