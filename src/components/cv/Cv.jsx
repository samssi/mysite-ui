import React from 'react';
import { Link } from 'react-router'
import PersonalInformation from './PersonalInformation';

export default React.createClass({
    render() {
        return (<div className="cv">
                    <PersonalInformation />
               </div>);

    }
});