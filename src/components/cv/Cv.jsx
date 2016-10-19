import React from 'react';
import { Link } from 'react-router'
import PersonalInformation from './PersonalInformation';
import Experience from './Experience';

class Cv extends React.Component {
    render() {
        return (<div className="cv">
                    <PersonalInformation />
                    <Experience />
               </div>);
    }
}

export default Cv;