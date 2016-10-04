import React from 'react';
import axios from 'axios';

function renderHeaders(jsonData) {
    console.log('header render: ' + jsonData);
    return jsonData.map((object, i) => {
       return (
           <div className="header" key={i}>
               {object.header}
               {renderBlocks(object.blocks)}
           </div>
       );
    });
}

function renderBlocks(blocks) {
    console.log("Blocks: " + blocks);
    return blocks.map((block, j) => {
        return (
            <div className="block" key={j}>
                {block.title} - {block.content}
            </div>
        );
    });
}

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
            {renderHeaders(this.state.jsonData)}
        </div>);
    }
});