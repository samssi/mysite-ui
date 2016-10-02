import React from 'react';
import ReactDOM from 'react-dom';
import Name from './Name';
import Content from './Content';
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (<div className="cv">
                    <Name />
                    <Content />
                    <p><Link to="/">Etusivu</Link></p>
               </div>);

    }
});