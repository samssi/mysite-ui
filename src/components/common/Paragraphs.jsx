import React from 'react';

const field = {
    marginBottom: '20px'
};

class Paragraphs extends React.Component {
    renderParagraphs(paragraphs) {
        return paragraphs.map((element, i) => {
            return (<p style={field} key={i}>{element.paragraph}</p>);
        });
    }

    render() {
        return (<div>{this.renderParagraphs(this.props.paragraphs)}</div>);
    }
}

export default Paragraphs;