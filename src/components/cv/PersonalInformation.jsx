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
        return (<div className="name">
            <p>{json.name}</p>
            <p>{json.address.street}</p>
            <p>{json.address.zipcode} {json.address.city}</p>
            <p>{json.phoneNumber}</p>
            <p>{json.dateOfBirth}</p>
        </div>);
    }
});