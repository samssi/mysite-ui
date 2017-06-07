import React from "react";
import axiosFactory from "../factory/axiosFactory";
const axios = axiosFactory.createAxiosContentRestClient();


const clear = {
    clear: "both"
};

const leftColumn = {
    width: "500px",
    overflow: "hidden",
    display: "block"
};

const rightColumn = {
    width: "755px",
    float: "right"
};

const header = {
    color: "white"
};

const column = {
    color: "white",
    display: "block",
    marginTop: "20px",
    marginBottom: "20px"
};

class Experience extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            jsonData: []
        }
    }

    loadExperienceInformation() {
        axios.get("/private/contents/experience")
            .then((response) => {
                const json = response.data;
                this.setState({
                    jsonData: json
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    renderHeaders(jsonData) {
        return jsonData.map((object, i) => {
            if (object.header === "") {
            return (
                <div style={header} key={i}>
                    {this.renderBlocks(object.blocks)}
                </div>);
            }
            else {
                return (
                    <div style={header} key={i}>
                        {object.header}
                        {this.renderBlocks(object.blocks)}
                    </div>
                );
            }
        });
    }

    renderBlocks(blocks) {
        return blocks.map((block, j) => {
            return (
                <div style={column} key={j}>
                    <span style={leftColumn}>{(block.title === "") ? "\u00a0" : block.title }</span><span style={rightColumn}>{block.content}</span>
                    <br style={clear} />
                </div>
            );
        });
    }


    componentDidMount() {
        this.loadExperienceInformation();
    }

    render() {
        return (<div className="experienceInformation">
            {this.renderHeaders(this.state.jsonData)}
        </div>);
    }
}

export default Experience;