import React from 'react';
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
        return (<div className="personalInformation">
            <div className="leftColumn">{this.state.data.name}</div><div className="rightColumn">CURRICULUM VITAE</div>
            <div className="leftColumn">{this.state.data.address.street}</div>
            <div className="leftColumn">{this.state.data.address.zipcode} {this.state.data.address.city}</div>
            <div className="leftColumn">{this.state.data.phoneNumber}</div>
            <div className="leftColumn">{this.state.data.dateOfBirth}</div>
        </div>);
    }
});