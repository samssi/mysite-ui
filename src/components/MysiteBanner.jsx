import React from "react";

const headerBanner = {
    paddingTop: "20px",
    textAlign: "center",
    color: "white",
    backgroundColor: "#20398d",
    display: "block"
};

class MysiteBanner extends React.Component {
    render() {
        return (<div style={headerBanner}><div>**** MySite ****</div></div>);
    }
}

export default MysiteBanner;