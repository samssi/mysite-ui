import React from 'react';
import Cursor from '../style/Cursor'
import Paragraphs from '../common/Paragraphs'

import axiosFactory from '../factory/axiosFactory';
const axios = axiosFactory.createAxiosContentRestClient();

const company = {
    color: 'yellow'
};

const assignment = {
    marginBottom: '40px'
};

const year = {
    color: 'white'
};

const assignmentDescription = {
    color: 'white'
};

const technology = {
    color: 'grey'
};

class Application extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            jsonData: []
        }
    }

    loadPortfolio() {
        axios.get('/private/contents/portfolio')
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

    renderCompanies(jsonData) {
        return jsonData.map((element, i) => {
            return (
                <div key={i} style={company}>
                    {element.company}
                    {this.renderAssignments(element.assignments)}
                </div>
            );
        });
    }

    renderAssignments(assignments) {
        return assignments.map((element, i) => {
            return (
                <div key={i} style={assignment}>
                    <span style={year}>{element.year}</span>
                    <div style={assignmentDescription}><Paragraphs paragraphs={element.paragraphs} /></div>
                    {this.renderTechnologies(element.technologies)}
                </div>
            );
        });
    }

    renderTechnologies(technologies) {
        return ( <div style={technology}>({technologies.join(", ")})</div>);
    }

    render() {
        return (<div>
                <div>{this.renderCompanies(this.state.jsonData)}</div>
                <Cursor blinkType="blink-grey" />
            </div>
        )
    }
}

export default Application;