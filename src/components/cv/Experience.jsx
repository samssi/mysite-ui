import React from 'react';
import axios from 'axios';

export default React.createClass({
    getInitialState: function() {
        return {
            jsonData: []
        };
    },
    loadExperienceInformation() {
        axios.get('http://localhost:8090/contents/experiences')
            .then((response) => {
                const json = response.data;
                this.setState({
                    jsonData: json
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
            {this.state.jsonData.map((object, i) => {
                return (<div className="header" key={i}>{object.header}</div>);
            })}
        </div>);
    }
});