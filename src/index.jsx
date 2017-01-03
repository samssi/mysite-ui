import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/App';
import Cv from './components/cv/Cv';
import Login from './components/login/Login';
import Application from './components/application/Application';
import './fonts/font.css';
import {requireAuthentication} from './components/security/Authenticator';
import axiosConfigurator from './components/factory/axiosConfigurator';
axiosConfigurator.configureAuthorizationHeader();

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/cv" component={Cv} onEnter={requireAuthentication}/>
            <Route path="/login" component={Login}/>
            <Route path="/application" component={Application} onEnter={requireAuthentication}/>
        </Route>
    </Router>
), document.getElementById('app'));
