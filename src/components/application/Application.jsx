import React from 'react';
import Cursor from '../style/Cursor'

import axiosFactory from '../factory/axiosFactory';
const axios = axiosFactory.createAxiosContentRestClient();

const greetingColumn = {
    marginBottom: '20px'
};

const signatureBlock = {
    marginTop: '75px'
};

const leftColumn = {
    width: '500px',
    overflow: 'hidden'
};

const rightColumn = {
    width: '300px',
    float: 'right'
};

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

    renderParagraphs(paragraphs) {
        return paragraphs.map((element, i) => {
            return (<p key={i}>{element.paragraph}</p>);
        });
    }

    render() {
        return (<div>
                    <div style={greetingColumn}>{this.state.greeting}</div>
                    {this.renderParagraphs(this.state.paragraphs)}
                    <div style={signatureBlock}>
                        <div><span style={leftColumn}>{"\u00a0"}</span><span style={rightColumn}>{this.state.signatureTitle}</span></div>
                        <div><span style={leftColumn}>{"\u00a0"}</span><span style={rightColumn}>{this.state.signature}</span></div>
                    </div>
                    <Cursor blinkType="blink-white" />
                  </div>
        );
    }
}

export default Application;