import React from 'react'
import { Link } from 'react-router'
import {isAuthenticated} from './security/Authenticator'

const liStyle = {
    'margin-left': '10px',
    float: 'left'
};


const liAStyle = {
    display: 'block',
    'padding-left': '20px',
    'background-color': '#20398d',
    color: '#6076c5',
    'text-align': 'center',
    'padding-top': '20px',
    'text-decoration': 'none',
    'font-family': 'C64'
};

class MenuItem extends React.Component {
    authenticatedItem() {
        return (isAuthenticated() ? this.renderItem() : null);
    }

    renderItem() {
        return (<li style={liStyle}><Link to={this.props.to} style={liAStyle}>{this.props.text}</Link></li>);
    }

    render() {
        return (<div>{
            this.props.protected ? this.authenticatedItem() : this.renderItem()
        }</div>)
    }
}

export default MenuItem;