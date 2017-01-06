import React from 'react';
import Cursor from '../style/Cursor'

import axiosFactory from '../factory/axiosFactory';
const axios = axiosFactory.createAxiosContentRestClient();

class Application extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            jsonData: []
        }
    }

    loadPortfolio() {
        axios.get('/private/contents/portfolios')
            .then((response) => {
                this.setState({
                    jsonData: response.data
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.loadPortfolio();
    }

    render() {
        return (<div>
                <div>{renderCompanies(this.state.jsonData)}</div>
            </div>
        )
    }
}

function renderCompanies(jsonData) {
    return jsonData.map((element, i) => {
        return (
            <div key={i}>
                {element.company}
                {renderAssignments(element.assignments)}
            </div>
        );
    });
}

function renderAssignments(assignments) {
    return assignments.map((element, i) => {
        return (
            <div key={i}>
                {element.year}
                {renderAssignmentDescription(element.paragraphs)}
                {renderTechnologies(element.technologies)}
            </div>
        );
    });
}

function renderAssignmentDescription(paragraphs) {
    return paragraphs.map((element, i) => {
        return (
            <p key={i}>
                {element.paragraph}
            </p>
        );
    });
}

function renderTechnologies(technologies) {
    return ( <div>({technologies.join(", ")})</div>);
}

export default Application;