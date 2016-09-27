import React from 'react';
import ReactDOM from 'react-dom';
import Name from './Name';
import Content from './Content';

export default React.createClass({
    render: function() {
        return <div className="cv">
                    <Name />
                    <Content />
               </div>;

    }
});