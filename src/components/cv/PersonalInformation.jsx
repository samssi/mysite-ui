import React from 'react';
import axios from 'axios';

class PersonalInformation extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            street: '',
            zipCodeAndCity: '',
            phoneNumber: '',
            dateOfBirth: '',
            cvTitle: ''
        }
    }

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
    }

    componentDidMount() {
        this.loadPersonalInformation();
    }

    render() {
        return (<div className="personalInformation">
            <div className="personalInfoField"><span className="leftColumn">{this.state.name}</span><span
                className="rightColumn">{this.state.cvTitle}</span></div>
            <div className="personalInfoField"><span className="leftColumn">{this.state.street}</span></div>
            <div className="personalInfoField"><span className="leftColumn">{this.state.zipCodeAndCity}</span></div>
            <div className="personalInfoField"><span className="leftColumn">{this.state.phoneNumber}</span></div>
            <div className="personalInfoField"><span className="leftColumn">{this.state.dateOfBirth}</span></div>
        </div>);
    }
}

export default PersonalInformation;
