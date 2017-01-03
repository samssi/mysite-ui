import React from 'react';
import { Link } from 'react-router'
import PersonalInformation from './PersonalInformation'
import Experience from './Experience'
import Cursor from '../style/Cursor'

const cvBlock = {
    marginTop: '30px',
    marginLeft: '30px'
};

class Cv extends React.Component {
    render() {
        return (<div>
                    <div style={cvBlock}>
                        <PersonalInformation />
                        <Experience />
                    </div>
                    <Cursor blinkType="blink-white" />
                </div>);
    }
}

export default Cv;