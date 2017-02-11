import React from 'react';
import Paragraphs from '../common/Paragraphs'
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
        axios.get('/private/contents/application')
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
        return (<div>
                    <div style={greetingColumn}>{this.state.greeting}</div>
                    <Paragraphs paragraphs={this.state.paragraphs}/>
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