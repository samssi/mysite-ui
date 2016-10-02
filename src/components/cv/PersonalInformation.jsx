import React from 'react';

const json = {
    "name": "Pekka Peloton",
    "address": {
        "street": "Mallikatu 1",
        "zipcode": "33200",
        "city": "Tampere"
    },
    "phoneNumber": "+358 12 345 6789",
    "dateOfBirth": "12. elokuuta 1982"
};

export default React.createClass({
    render() {
        return (<div className="personalInformation">
            <div className="leftColumn">{json.name}</div><div className="rightColumn">CURRICULUM VITAE</div>
            <div className="leftColumn">{json.address.street}</div>
            <div className="leftColumn">{json.address.zipcode} {json.address.city}</div>
            <div className="leftColumn">{json.phoneNumber}</div>
            <div className="leftColumn">{json.dateOfBirth}</div>
        </div>);
    }
});