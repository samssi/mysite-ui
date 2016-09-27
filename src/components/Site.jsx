import React from 'react';
import ReactDOM from 'react-dom';
import Content from './cv/Content';
import Cv from './cv/Cv';
import Header from './Header'

export default React.createClass({
    render: function() {
        return <div className="site">
                 <Header />
                 <Cv />
               </div>;
    }
});