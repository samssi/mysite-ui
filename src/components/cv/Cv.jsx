import React from 'react';
import { Link } from 'react-router'
import PersonalInformation from './PersonalInformation';
import Experience from './Experience';

const cvBlock = {
    'margin-top': '30px',
    'margin-left': '30px'
};

class Cv extends React.Component {
    render() {
        return (<div style={cvBlock}>
                    <PersonalInformation />
                    <Experience />
               </div>);
    }
}

export default Cv;