import React from 'react';

const error = {
    color: 'red'
};

class LoginError extends React.Component {
    render() {
        return (<div style={error}>{this.props.errorMessage}</div>);
    }
}

export default LoginError;
