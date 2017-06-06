import React from "react";
import { Link } from "react-router";
import {isAuthenticated} from "./security/Authenticator";

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

class LoginItem extends React.Component {
    renderLogin() {
        return (<li style={liStyle}><Link to="/login" style={liAStyle}>LOGIN</Link></li>);
    }

    renderLogout() {
        return (<li style={liStyle}><Link to="logout" style={liAStyle}>LOGOUT</Link></li>);
    }

    render() {
        return (<div>{
            isAuthenticated() ? this.renderLogout() : this.renderLogin()
        }</div>)
    }
}

export default LoginItem;