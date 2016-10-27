import React from 'react';
import ReactDOM from 'react-dom';

const inputText = {
    border: 'none',
    'border-bottom': '0px solid white',
    color: 'white',
    'background-color': '#6076c5',
    'font-family': 'C64',
    'font-size': '16px',
    height: '20px'
};

const submitButton = {
    cursor: 'pointer'
};

const field = {
    'margin-top': '20px'
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

    handleSubmit(event) {
        alert('username is: ' + this.state.username + ' password is: ' + this.state.password);
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