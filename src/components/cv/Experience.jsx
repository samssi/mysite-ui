import React from 'react';
import axios from 'axios';

export default React.createClass({
    getInitialState: function() {
        return {
            header: '',
            title: '',
            content: ''
        };
    },
    loadExperienceInformation() {
        axios.get('http://localhost:8090/contents/experiences')
            .then((response) => {
                const json = response.data;
                this.setState({
                    header: json[0].header,
                    title: json[0].blocks[0].title,
                    content: json[0].blocks[0].content
                });
            })
            .catch((error) => {
                console.log(error);
            });
    },
    componentDidMount() {
        this.loadExperienceInformation();
    },
    render() {
        return (<div className="experienceInformation">
            <div className="header">{this.state.header}</div>
            <div className="leftColumn">{this.state.title}</div><div className="rightColumn">{this.state.content}</div>
        </div>);
    }
});