import React from 'react';
import ReactDOM from 'react-dom';

function cursor(blinkType) {
    const value = {'margin-top': '10px',
        'width': '20px',
        'height': '20px',
        'animation-name': blinkType,
        '-webkit-animation-name': blinkType,
        '-webkit-animation-duration': '1s',
        '-webkit-animation-iteration-count': 'infinite',
        'animation-iteration-count': 'infinite',
        'animation-duration': '1s',
        '-webkit-animation-timing-function': 'linear',
        'animation-timing-function': 'linear'};
    return value;
}

class Cursor extends React.Component {
    render() {
        return (<div style={cursor(this.props.blinkType)}>&nbsp;</div>);
    }
}

export default Cursor;