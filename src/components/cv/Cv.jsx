import React from 'react';
import { Link } from 'react-router'
import PersonalInformation from './PersonalInformation';
import Experience from './Experience';

export default React.createClass({
    render() {
        return (<div className="cv">
                    <PersonalInformation />
                    <Experience />
               </div>);
    }
});