import React from 'react';
import ReactDOM from 'react-dom';
import Cursor from '../style/Cursor'
import Letter from './Letter'

import axiosFactory from '../factory/axiosFactory';
const axios = axiosFactory.createAxiosContentRestClient();

const greetingField = {

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
        return (<div>
                    <div style={greetingField}><span>{this.state.greeting}</span></div>
                  </div>
        );
    }
}

export default Application;