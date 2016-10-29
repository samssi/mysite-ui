import React from 'react';

function isAuthenticated() {
    return true;
}

function requireAuthentication(Component) {
    class AuthenticatedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                authenticated: false
            };
        }

        componentWillMount() {
            this.state.authenticated = isAuthenticated();
        }


        render(){
            return (<div>
                    {
                        this.state.authenticated ? <Component {...this.props} /> : null
                    }
                  </div>
            );
        }
    }
    return AuthenticatedComponent;
}

export {requireAuthentication, isAuthenticated};