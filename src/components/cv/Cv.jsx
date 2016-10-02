import React from 'react';
import { Link } from 'react-router'
import PersonalInformation from './PersonalInformation';
import axios from 'axios';

const json = {
    "name": "Pekka Peloton - NON SERVER",
    "address": {
        "street": "Mallikatu 1",
        "zipcode": "33200",
        "city": "Tampere"
    },
    "phoneNumber": "+358 12 345 6789",
    "dateOfBirth": "12. elokuuta 1982"
};

export default React.createClass({
    getInitialState: function() {
        return { data: json };
    },
    loadPersonalInformation() {
        axios.get('http://localhost:8090/contents/personals')
            .then((response) => {
                const json = response.data;
                console.log(json);
                this.setState({ data: json });
            })
            .catch((error) => {
                console.log(error);
            });
    },
    componentDidMount() {
        this.loadPersonalInformation();
    },
    render() {
        return (<div className="cv">
                    <PersonalInformation data={this.state.data} />
               </div>);
    }
});