import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
    render() {
        return (
            <div>
                <ul role="nav">
                    <li><Link to="/">Etusivu</Link></li>
                    <li><Link to="/cv">Cv</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default App;