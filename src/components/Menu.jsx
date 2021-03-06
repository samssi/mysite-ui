import React from "react";
import MenuItem from "./MenuItem"
import LoginItem from "./LoginItem"

const ulStyle = {
    paddingTop: "10px",
    backgroundColor: "#20398d",
    margin: "0",
    padding: "0",
    overflow: "hidden",
    listStyleType: "none"
};

class Menu extends React.Component {
    render() {
        return (<ul role="nav" style={ulStyle}>
            <MenuItem to="/application" text="APPLICATION" protected="true"/>
            <MenuItem to="/cv" text="CV" protected="true"/>
            <MenuItem to="/portfolio" text="PORTFOLIO" protected="true"/>
            <MenuItem to="/about" text="ABOUT" protected="true"/>
            <LoginItem />
        </ul>);
    }
}

export default Menu;