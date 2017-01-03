import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import MenuItem from './MenuItem'

const ulStyle = {
    paddingTop: '10px',
    backgroundColor: '#20398d',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    listStyleType: 'none'
};

const liStyle = {
    marginLeft: '10px',
    float: 'left'
};

const liAStyle = {
    display: 'block',
    paddingLeft: '20px',
    backgroundColor: '#20398d',
    color: '#6076c5',
    textAlign: 'center',
    paddingTop: '20px',
    textDecoration: 'none',
    fontFamily: 'C64'
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