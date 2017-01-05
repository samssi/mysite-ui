import React from 'react';
import ReactDOM from 'react-dom';
import Cursor from '../style/Cursor'

import axiosFactory from '../factory/axiosFactory';
const axios = axiosFactory.createAxiosContentRestClient();

const greetingField = {
    color: 'white',
    display: 'block',
    marginTop: '20px',
    marginBottom: '40px'
};

function renderParagraphs(paragraphs) {
    return paragraphs.map((element) => {
        return (<p>{element.paragraph}</p>);
    });
}

class Application extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            greeting: '',
            signatureTitle: '',
            signature: '',
            paragraphs: []

        }
    }

    loadApplication() {
        console.log('foo');
        axios.get('/private/contents/applications')
            .then((response) => {
                const json = response.data;
                this.setState({
                    greeting: json.greeting,
                    signatureTitle: json.signatureTitle,
                    signature: json.signature,
                    paragraphs: json.paragraphs
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.loadApplication();
    }

    render() {
        return (<div style={greetingField}>
                    <div><span>{this.state.greeting}</span></div>
                    {renderParagraphs(this.state.paragraphs)}
                    <Cursor blinkType="blink-white" />
                  </div>
        );
    }
}

export default Application;