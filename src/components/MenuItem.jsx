import React from "react"
import { Link } from "react-router-dom"
import {isAuthenticated} from "./security/Authenticator"

const liStyle = {
    marginLeft: "10px",
    float: "left"
};


const liAStyle = {
    display: "block",
    paddingLeft: "20px",
    backgroundColor: "#20398d",
    color: "#6076c5",
    textAlign: "center",
    paddingTop: "20px",
    textDecoration: "none",
    fontFamily: "C64"
};

class MenuItem extends React.Component {
    authenticatedItem() {
        return (isAuthenticated() ? this.renderItem() : null);
    }

    renderItem() {
        return (<li style={liStyle}><Link to={this.props.to} style={liAStyle}>{this.props.text}</Link></li>);
    }

    render() {
        return (<div>{
            this.props.protected ? this.authenticatedItem() : this.renderItem()
        }</div>)
    }
}

export default MenuItem;