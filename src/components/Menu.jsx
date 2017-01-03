import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import MenuItem from './MenuItem'

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
            <MenuItem to="/" text="F1 ETUSIVU"/>
            <MenuItem to="/cv" text="F3 CV" protected="true"/>
            <MenuItem to='/application' text="F5 APPLICATION" protected="true"/>
            <MenuItem to="/login" text="F7 LOGIN"/>
        </ul>);
    }
}

export default Menu;