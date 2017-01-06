import React from 'react';
import Cursor from '../style/Cursor'
import LoginForm from './LoginForm'

const login = {
    color: 'white',
    display: 'block',
    marginTop: '20px',
    marginBottom: '40px',
    padding: '30px'
}

class Login extends React.Component {
    render() {
        return (<div style={login}>
                    <p>Please provide your credentials here</p>
                    <LoginForm />
                    <Cursor blinkType="blink-white" />
                </div>)

    }
}

export default Login;