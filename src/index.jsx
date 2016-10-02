import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/App'
import Cv from './components/cv/Cv'
import Login from './components/login/Login'

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/cv" component={Cv}/>
            <Route path="/login" component={Login}/>
        </Route>
    </Router>
), document.getElementById('app'))

