import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Mysite</h1>
                <ul role="nav">
                    <li><Link to="/">Etusivu</Link></li>
                    <li><Link to="/cv">Cv</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
        }
    });