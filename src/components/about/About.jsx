import React from 'react';
import Cursor from '../style/Cursor'
import axiosFactory from '../factory/axiosFactory';
const axios = axiosFactory.createAxiosContentRestClient();


const header = {
    color: 'yellow',
    marginBottom: '20px'
};

const description = {
    color: 'white',
    marginBottom: '20px'
};

const technologies = {
    color: 'white',
    marginBottom: '20px'
};

const serviceDescription = {
    color: 'white'
};

const link = {
    color: 'red'
}


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
            return (<div key={i} style={serviceDescription}>
                        <p style={header}>{element.title}</p>
                        <p key={i}>{element.description}</p>
                        <p><a style={link} target="_blank" href={element.github}>{element.github}</a></p>
                    </div>
            );
        });
    }

    render() {
        return (<div>
            <div style={header}>{this.state.header}</div>
            <div style={description}>{this.state.description}</div>
            <div style={technologies}>{this.renderTechnologies(this.state.technologies)}</div>
            <div style={header}>This project consist of following services:{this.renderServices(this.state.services)}</div>
            <Cursor blinkType="blink-red" />
        </div>);
    }
}

export default About;