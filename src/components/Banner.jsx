import React from "react";

const headerBanner = {
    paddingTop: "20px",
    textAlign: "center",
    color: "#6076c5",
    backgroundColor: "#20398d",
    display: "block"
};

class Banner extends React.Component {
    render() {
        return(<div style={headerBanner}>
            <div>**** COMMODORE 64 BASIC V2 ****</div>
            <br />
            <div>64K RAM SYSTEM  38911 BASIC BYTES FREE</div>
        </div>);
    }
}

export default Banner;
