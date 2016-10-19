import React from 'react';
import ReactDOM from 'react-dom';
import Cursor from '../style/Cursor'

const login = {
    color: 'white'
}

class Login extends React.Component {
    render() {
        return (<div style={login}>
                    <p>This is the login page...</p>
                    <Cursor blinkType="blink-white" />
                </div>)

    }
}

export default Login;