import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import Site from './components/Site';
import Cv from './components/cv/Cv';
import Login from './components/login/Login'

ReactDOM.render((
    <Router>
        <Route path="/" component={Site} />
        <Route path="/cv" component={Cv} />
        <Route path="/login" component={Login} />
    </Router>),
    document.getElementById('app')
);

