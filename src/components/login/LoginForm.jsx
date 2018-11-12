import React from "react";
import * as axiosConfigurator from "../factory/axiosConfigurator";
import * as axiosFactory from "../factory/axiosFactory";
import LoginError from "./LoginError";
import { withRouter } from "react-router-dom";
const axios = axiosFactory.createAxiosAuthRestClient();

const inputText = {
    border: "none",
    borderBottom: "0px solid white",
    color: "white",
    backgroundColor: "black",
    fontFamily: "C64",
    fontSize: "16px",
    height: "20px"
};

const submitButton = {
    cursor: "pointer",
    background: "none",
    border: "none",
    borderBottom: "0px solid white",
    color: "white",
    backgroundColor: "#20398d",
    fontFamily: "C64",
    fontSize: "16px",
    height: "20px"
};

const field = {
    marginBottom: "20px"
};

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginFailed: false,
            loginFailureMessage: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(name, event) {
        let input = {};
        input[name] = event.target.value;
        this.setState(input);
    }

    doLogin() {
        axios.post("/login", {
            username: this.state.username,
            password: this.state.password
        })
            .then((response) => {
                sessionStorage.setItem("jwt", response.data.token);
                axiosConfigurator.configureAuthorizationHeader();
                this.props.history.push("/application");

            })
            .catch((error) => { this.handleErrors(error); });
    }

    handleErrors(error) {
        if (error.response === undefined) {
            console.log("network");
            this.state.loginFailed = true;
            this.state.loginFailureMessage = "Authentication service down :( Please try again later";
        }
        else if (error.response.status === 401) {
            console.log("other");
            this.state.loginFailed = true;
            this.state.loginFailureMessage = "Username or password not correct!";
        }
        this.setState(this.state);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.doLogin();
    }


    render() {return (<div>
        {this.state.loginFailed ? <LoginError errorMessage={this.state.loginFailureMessage}/> : false}
        <form onSubmit={this.handleSubmit}>
            <div style={field}>
                <input style={inputText}
                       type="text"
                       placeholder="Username..."
                       value={this.state.value}
                       onChange={this.handleChange.bind(this, "username")} />
            </div>
            <div style={field}>
                <input style={inputText}
                       type="password"
                       placeholder="Password..."
                       value={this.state.value}
                       onChange={this.handleChange.bind(this, "password")} />
            </div>
            <div style={field}>
                <input style={submitButton} type="submit" value="Login"/>
            </div>
        </form>
    </div>)}

}

export default withRouter(LoginForm);