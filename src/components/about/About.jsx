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
            document: ''
        }
    }

    loadAbout() {
        axios.get("/private/contents/about")
            .then((response) => {
                const json = response.data;
                this.setState({
                    document: json
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.loadAbout();
    }

    render() {
        const document = this.state.document;
        return (<div style={about}>
            <div>{document.header}</div>
            <div>{document.header}</div>
        </div>);
    }
}

export default About;