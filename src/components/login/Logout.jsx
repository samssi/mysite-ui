import React from "react";
import { BrowserRouter } from "react-router-dom";

class Logout extends React.Component {
    componentDidMount() {
        sessionStorage.removeItem("jwt");
        this.props.history.push("/");
    }
    render() { return null; }
}

export default Logout;