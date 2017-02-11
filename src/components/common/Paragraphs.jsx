import React from 'react';

class Paragraphs extends React.Component {
    renderParagraphs(paragraphs) {
        return paragraphs.map((element, i) => {
            return (<p key={i}>{element.paragraph}</p>);
        });
    }

    render() {
        console.log(this.props.paragraphs);
        return (<div>{this.renderParagraphs(this.props.paragraphs)}</div>);
    }
}

export default Paragraphs;