import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'

const ulStyle = {
    'padding-top': '10px',
    'background-color': '#20398d',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    'list-style-type': 'none'
};

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

class Menu extends React.Component {
    render() {
        return (<ul role="nav" style={ulStyle}>
            <li style={liStyle}><Link to="/" style={liAStyle}>F1 ETUSIVU</Link></li>
            <li style={liStyle}><Link to="/cv" style={liAStyle}>F3 CV</Link></li>
            <li style={liStyle}><Link to="/login" style={liAStyle}>F5 LOGIN</Link></li>
        </ul>);
    }
}

export default Menu;