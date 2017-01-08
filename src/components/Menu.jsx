import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import MenuItem from './MenuItem'
import LoginItem from './LoginItem'

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
            <MenuItem to="/" text="FRONTPAGE"/>
            <MenuItem to="/cv" text="CV" protected="true"/>
            <MenuItem to="/application" text="APPLICATION" protected="true"/>
            <MenuItem to="/portfolio" text="PORTFOLIO" protected="true"/>
            <MenuItem to="/about" text="ABOUT" protected="true"/>
            <LoginItem />
        </ul>);
    }
}

export default Menu;