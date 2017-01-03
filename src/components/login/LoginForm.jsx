import React from 'react';
import ReactDOM from 'react-dom';
import axiosConfigurator from '../factory/axiosConfigurator';
import axiosFactory from '../factory/axiosFactory';
import { browserHistory } from 'react-router';

const axios = axiosFactory.createAxiosAuthRestClient();

const inputText = {
    border: 'none',
    borderBottom: '0px solid white',
    color: 'white',
    backgroundColor: '#6076c5',
    fontFamily: 'C64',
    fontSize: '16px',
    height: '20px'
};

const submitButton = {
    cursor: 'pointer'
};

const field = {
    marginTop: '20px'
};

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
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
        axios.post('/login', {
            username: this.state.username,
            password: this.state.password
        })
            .then((response) => {
                sessionStorage.setItem('jwt', response.data.token);
                axiosConfigurator.configureAuthorizationHeader();
                browserHistory.push('/');
            })
            .catch((error) => {
                // TODO: push to login and display error message
                console.log(error);
            });
    }

    handleSubmit(event) {
        this.doLogin();
    }


    render() {
        return (<div>
            <div style={field}>
                <input style={inputText}
                       type="text"
                       placeholder="Username..."
                       value={this.state.value}
                       onChange={this.handleChange.bind(this, 'username')} />
            </div>
            <div style={field}>
            <input style={inputText}
                   type="password"
                   placeholder="Password..."
                   value={this.state.value}
                   onChange={this.handleChange.bind(this, 'password')} />
            </div>
            <div style={field}>
            <div style={submitButton} onClick={this.handleSubmit}>
                Login
            </div>
            </div>
        </div>)

    }
}

export default LoginForm;