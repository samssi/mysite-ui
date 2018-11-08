import React from "react";
import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience";
import Cursor from "../style/Cursor";

class Cv extends React.Component {
    render() {
        return (<div>
                    <PersonalInformation />
                    <Experience />
                    <Cursor blinkType="blink-white" />
                </div>);
    }
}

export default Cv;