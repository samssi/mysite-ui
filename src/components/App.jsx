import React from 'react'
import { Link } from 'react-router'

const divStyle = {
    height: '100vh',
    'background-color': '#20398d'
};

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

class App extends React.Component {
    componentWillMount() {
        document.body.style.backgroundColor = "#6076c5";
        document.body.style.color = "white";
        document.body.style.padding = "47px";
    }

    render() {
        return (
            <div style={divStyle}>
                <ul role="nav" style={ulStyle}>
                    <li style={liStyle}><Link to="/" style={liAStyle}>F1 ETUSIVU</Link></li>
                    <li style={liStyle}><Link to="/cv" style={liAStyle}>F3 CV</Link></li>
                    <li style={liStyle}><Link to="/login" style={liAStyle}>F5 LOGIN</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default App;