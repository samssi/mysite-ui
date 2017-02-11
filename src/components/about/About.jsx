import React from 'react';
import axiosFactory from '../factory/axiosFactory';
const axios = axiosFactory.createAxiosContentRestClient();

const about = {
    color: 'white'
};

class About extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            header: '',
            description: '',
            technologies: []
        }
    }

    loadAbout() {
        axios.get("/private/contents/about")
            .then((response) => {
                const json = response.data;
                this.setState({
                    header: json.header,
                    description: json.description,
                    technologies: json.technologies
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.loadAbout();
    }

    renderTechnologies(technologies) {
        return (<div>Technologies used: {technologies.join(", ")}</div>);
    }

    render() {
        return (<div style={about}>
            <div>{this.state.header}</div>
            <div>{this.state.description}</div>
            {this.renderTechnologies(this.state.technologies)}
        </div>);
    }
}

export default About;