import React from 'react';
import axios from 'axios';

const clear = {
    clear: 'both'
};

const leftColumn = {
    width: '500px',
    overflow: 'hidden'
};

const rightColumn = {
    width: '755px',
    float: 'right'
};

const header = {
    color: 'white'
}

const column = {
    color: 'white',
    display: 'block',
    'margin-top': '20px',
    'margin-bottom': '40px'
};

function renderHeaders(jsonData) {
    return jsonData.map((object, i) => {
       return (
           <div style={header} key={i}>
               {(object.header === "") ? "\u00a0" : object.header}
               {renderBlocks(object.blocks)}
           </div>
       );
    });
}

function renderBlocks(blocks) {
    return blocks.map((block, j) => {
        return (
            <div style={column} key={j}>
                <span style={leftColumn}>{(block.title === "") ? "\u00a0" : block.title }</span><span style={rightColumn}>{block.content}</span>
                <br style={clear} />
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