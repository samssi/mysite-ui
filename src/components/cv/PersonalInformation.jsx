import React from 'react';
import axios from 'axios';

export default React.createClass({
    getInitialState: function() {
        return { name: '',
                 street: '',
                 zipCodeAndCity: '',
                 phoneNumber: '',
                 dateOfBirth: '',
                 cvTitle: ''
        };
    },
    loadPersonalInformation() {
        axios.get('http://localhost:8090/contents/personals')
            .then((response) => {
                const json = response.data;
                this.setState({
                    name: json.name,
                    street: json.address.street,
                    zipCodeAndCity: json.address.zipcode + ' ' + json.address.city,
                    phoneNumber: json.phoneNumber,
                    dateOfBirth: json.dateOfBirth,
                    cvTitle: json.title
                    });
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
            <div className="leftColumn">{this.state.name}</div><div className="rightColumn">{this.state.cvTitle}</div>
            <div className="leftColumn">{this.state.street}</div>
            <div className="leftColumn">{this.state.zipCodeAndCity}</div>
            <div className="leftColumn">{this.state.phoneNumber}</div>
            <div className="leftColumn">{this.state.dateOfBirth}</div>
        </div>);
    }
});