import React from "react";
import * as axiosFactory from "../factory/axiosFactory";
const axios = axiosFactory.createAxiosContentRestClient();

const personalInformation = {
    color: "white",
    paddingTop: "10px",
    paddingBottom: "10px"
};

const personalInfoField = {
    display: "block"
};

class PersonalInformation extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: "",
            street: "",
            zipCodeAndCity: "",
            phoneNumber: "",
            applicationDate: "",
            cvTitle: "",
            picture: ""
        }
    }

    loadPersonalInformation() {
        axios.get("/private/contents/personal")
            .then((response) => {
                const json = response.data;
                this.setState({
                    name: json.name,
                    street: json.address.street,
                    zipCodeAndCity: json.address.zipcode + " " + json.address.city,
                    phoneNumber: json.phoneNumber,
                    applicationDate: json.applicationDate,
                    cvTitle: json.title,
                    picture: __IMAGES_API_URL__ + json.picture
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.loadPersonalInformation();
    }

    render() {
        return (<div style={personalInformation}>
            <div style={personalInfoField}><img src={this.state.picture} /></div>
            <div style={personalInfoField}>{this.state.name}</div>
            <div style={personalInfoField}>{this.state.street}</div>
            <div style={personalInfoField}>{this.state.zipCodeAndCity}</div>
            <div style={personalInfoField}>{this.state.phoneNumber}</div>
            <div style={personalInfoField}>{"\u00a0"}</div>
            <div style={personalInfoField}>{this.state.cvTitle} - {this.state.applicationDate}</div>
        </div>);
    }
}

export default PersonalInformation;
