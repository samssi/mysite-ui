import React from 'react';
import axios from 'axios';

const leftColumn = {
    width: '500px',
    overflow: 'hidden'
};

const rightColumn = {
    width: '755px',
    float: 'right'
};

const column = {
    display: 'block'
};

const personalInformation = {
    'padding-top': '10px',
    'padding-bottom': '10px'
};

const personalInfoField = {
    display: 'block'
};

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
        return (<div style={personalInformation}>
            <div style={personalInfoField}><span style={leftColumn}>{this.state.name}</span><span style={rightColumn}>{this.state.cvTitle}</span></div>
            <div style={personalInfoField}><span style={leftColumn}>{this.state.street}</span></div>
            <div style={personalInfoField}><span style={leftColumn}>{this.state.zipCodeAndCity}</span></div>
            <div style={personalInfoField}><span style={leftColumn}>{this.state.phoneNumber}</span></div>
            <div style={personalInfoField}><span style={rightColumn}>{this.state.dateOfBirth}</span></div>
        </div>);
    }
}

export default PersonalInformation;
