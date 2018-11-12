import React from "react";
import ReactDOM from "react-dom";
import {Router, Route} from "react-router";
import { createBrowserHistory as createHistory } from "history";
import App from "./components/App";
import Cv from "./components/cv/Cv";
import Login from "./components/login/Login";
import Logout from "./components/login/Logout";
import Application from "./components/application/Application";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import "./fonts/font.css";
import "./css/reset.css";

import {requireAuthentication} from "./components/security/Authenticator";
import * as axiosConfigurator from "./components/factory/axiosConfigurator";

axiosConfigurator.configureAuthorizationHeader();
const history = createHistory()

ReactDOM.render((
    <Router history={history}>
        <App>
            <Route path="/"/>
            <Route path="/cv" component={Cv} onEnter={requireAuthentication}/>
            <Route path="/login" component={Login}/>
            <Route path="/application" component={Application} onEnter={requireAuthentication}/>
            <Route path="/portfolio" component={Portfolio} onEnter={requireAuthentication}/>
            <Route path="/about" component={About} onEnter={requireAuthentication}/>
            <Route path="/logout" component={Logout}/>
        </App>
    </Router>
), document.getElementById("root"));
