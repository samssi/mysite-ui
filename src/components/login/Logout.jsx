import React from "react";
import { browserHistory } from "react-router";

class Logout extends React.Component {
    componentDidMount() {
        sessionStorage.removeItem("jwt");
        browserHistory.push("/");
    }
    render() { return null; }
}

export default Logout;