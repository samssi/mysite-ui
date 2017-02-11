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
            technologies: [],
            services: []
        }
    }

    loadAbout() {
        axios.get("/private/contents/about")
            .then((response) => {
                const json = response.data;
                this.setState({
                    header: json.header,
                    description: json.description,
                    services: json.services,
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
        return (<div>Technologies used to create this site: {technologies.join(", ")}.</div>);
    }

    renderServices(services) {
        return services.map((element, i) => {
            return (<div key={i}>
                        <p>{element.title}</p>
                        <p key={i}>{element.description}</p>
                        <p><a href={element.github}>{element.github}</a></p>
                    </div>
            );
        });
    }

    render() {
        return (<div style={about}>
            <div>{this.state.header}</div>
            <div>{this.state.description}</div>
            <div>{this.renderTechnologies(this.state.technologies)}</div>
            <div>This project consist of following services:{this.renderServices(this.state.services)}</div>
        </div>);
    }
}

export default About;