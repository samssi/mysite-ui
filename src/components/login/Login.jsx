import React from 'react';
import ReactDOM from 'react-dom';
import Cursor from '../style/Cursor'
import LoginForm from './LoginForm'

const login = {
    color: 'white'
}

class Login extends React.Component {
    render() {
        return (<div style={login}>
                    <p>This is the login page...</p>
                    <LoginForm />
                    <Cursor blinkType="blink-white" />
                </div>)

    }
}

export default Login;