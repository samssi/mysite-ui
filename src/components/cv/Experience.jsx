import React from 'react';
import axios from 'axios';

function renderHeaders(jsonData) {
    return jsonData.map((object, i) => {
       return (
           <div className="header" key={i}>
               {(object.header === "") ? "&nbsp;" : object.header}
               {renderBlocks(object.blocks)}
           </div>
       );
    });
}

function renderBlocks(blocks) {
    return blocks.map((block, j) => {
        return (
            <div className="experience" key={j}>
                <span className="leftColumn">{(block.title === "") ? "\u00a0" : block.title }</span><span className="rightColumn">{block.content}</span>
            </div>
        );
    });
}

class Experience extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            jsonData: []
        }
    }

    loadExperienceInformation() {
        axios.get("http://localhost:8090/contents/experiences")
            .then((response) => {
                const json = response.data;
                this.setState({
                    jsonData: json
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.loadExperienceInformation();
    }

    render() {
        return (<div className="experienceInformation">
            {renderHeaders(this.state.jsonData)}
        </div>);
    }
}

export default Experience;