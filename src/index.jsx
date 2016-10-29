import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/App'
import Cv from './components/cv/Cv'
import Login from './components/login/Login'
import styles from './fonts/font.css';
import {requireAuthentication} from './components/security/Authenticator'

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/cv" component={Cv} onEnter={requireAuthentication}/>
            <Route path="/login" component={Login}/>
        </Route>
    </Router>
), document.getElementById('app'))
