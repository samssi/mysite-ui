import React from 'react';
import Cursor from '../style/Cursor'
import LoginForm from './LoginForm'

class Login extends React.Component {
    render() {
        return (<div>
                    <p>Please provide your credentials here</p>
                    <LoginForm />
                    <Cursor blinkType="blink-white" />
                </div>)

    }
}

export default Login;