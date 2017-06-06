import React from 'react';
import Cursor from '../style/Cursor'
import LoginForm from './LoginForm'

const field = {
    marginBottom: '20px'
};

class Login extends React.Component {
    render() {
        return (<div>
                    <p style={field}>Please provide your credentials here</p>
                    <LoginForm />
                </div>)

    }
}

export default Login;