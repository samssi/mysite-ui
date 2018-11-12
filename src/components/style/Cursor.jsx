import React from "react";

function cursor(blinkType) {
    const value = {
        marginTop: "10px",
        width: "20px",
        height: "20px",
        animationName: blinkType,
        WebkitAnimationName: blinkType,
        WebkitAnimationDuration: "1s",
        WebkitAnimationIterationCount: "infinite",
        animationIterationCount: "infinite",
        animationDuration: "1s",
        WebkitAnimationTimingFunction: "linear",
        animationTimingFunction: "linear"};
    return value;
}

class Cursor extends React.Component {
    render() {
        return (<div style={cursor(this.props.blinkType)}>&nbsp;</div>);
    }
}

export default Cursor;