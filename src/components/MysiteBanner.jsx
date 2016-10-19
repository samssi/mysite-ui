import React from 'react';
import ReactDOM from 'react-dom';

const headerBanner = {
    'padding-top': '20px',
    'text-align': 'center',
    'color': 'white',
    'background-color': '#20398d',
    display: 'block'
};

class MysiteBanner extends React.Component {
    render() {
        return (<div style={headerBanner}><div>**** MySite ****</div></div>);
    }
}

export default MysiteBanner;