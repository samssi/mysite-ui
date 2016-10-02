import React from 'react';
import ReactDOM from 'react-dom';

const ulStyle = {
    'list-style-type': 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    'background-color': '#333'
};

export default React.createClass({

    getInitialState: function() {
        return {
            token: 'bar'
        };
    },
    render: function() {
        return <ul style={ulStyle} className="header">
            <li> <a href="#introduction">Esittely / CV</a></li>
            <li>Portfolio</li>
            <li>Harrasteprojektit</li>
            <li>Portfolio</li>
            <li>Osaaminen</li>
            <li>{this.state.token}</li>
            <li>{this.props.source}</li>
        </ul>;

    }
});