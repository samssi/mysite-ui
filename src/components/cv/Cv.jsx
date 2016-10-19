import React from 'react';
import { Link } from 'react-router'
import PersonalInformation from './PersonalInformation';
import Experience from './Experience';

const cvBlock = {
    'margin-top': '30px',
    'margin-left': '30px'
};

const cursor = {
    'margin-top': '10px',
    'width': '20px',
    'height': '20px',
    'background-color': 'white',
    'animation-name': 'blink',
    '-webkit-animation-name': 'blink',
    '-webkit-animation-duration': '1s',
    '-webkit-animation-iteration-count': 'infinite',
    'animation-iteration-count': 'infinite',
    'animation-duration': '1s',
    '-webkit-animation-timing-function': 'linear',
    'animation-timing-function': 'linear'
};

class Cv extends React.Component {
    render() {
        return (<div>
                    <div style={cvBlock}>
                        <PersonalInformation />
                        <Experience />
                    </div>
                    <div style={cursor}>&nbsp;</div>
                </div>);
    }
}

export default Cv;