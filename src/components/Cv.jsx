import React from 'react';
import ReactDOM from 'react-dom';
import Content from './cv/Content';
import Name from './cv/Name';

export default React.createClass({
    render: function() {
        return <div className="cv">
                <Name />
                <Content />
               </div>;

    }
});