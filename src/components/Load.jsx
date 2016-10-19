import React from 'react';
import ReactDOM from 'react-dom';

const cursor = {
    'width': '20px',
    'height': '20px',
    'animation-name': 'blink-blue',
    '-webkit-animation-name': 'blink-blue',
    '-webkit-animation-duration': '1s',
    '-webkit-animation-iteration-count': 'infinite',
    'animation-iteration-count': 'infinite',
    'animation-duration': '1s',
    '-webkit-animation-timing-function': 'linear',
    'animation-timing-function': 'linear'
};

const ready = {
    color: '#6076c5',
    'margin-top': '20px'
};

class Load extends React.Component {
    render() {
        return (<div>
                <div style={ready}>READY.</div>
                <div>{'LOAD\u0022MYSITE\u0022,8,1'}</div>
                <br />
                <div>SEARCHING FOR MYSITE</div>
                <div>LOADING</div>
                <div>READY.</div>
                <div>RUN</div>
            </div>)

    }

}

export default Load;