import React from "react";
import Load from "./Load";
import Banner from "./Banner";
import MysiteBanner from "./MysiteBanner";
import Menu from "./Menu";
import Cursor from "./style/Cursor";

const mainBlock = {
    height: "100%",
    minHeight: "85vh",
    backgroundColor: "#20398d"
};

const children = {
    color: "white",
    display: "block",
    marginBottom: "40px",
    padding: "30px"
};

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        document.body.style.backgroundColor = "#6076c5";
        document.body.style.color = "#6076c5";
        document.body.style.padding = "47px";
        document.body.style.fontFamily = "C64";

        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        this.state.loading = false
    }

    render() {
        return (
            <div>
                <div style={mainBlock}>
                {this.state.loading ?  (<div><Banner /><Load /><MysiteBanner /></div>) : (<MysiteBanner />)}
                <Menu />
                <div style={children}>
                {this.props.children}
                </div>
                {this.state.loading ? (<Cursor blinkType="blink-blue"/>) : ""}
                </div>
            </div>
        );
    }
}

export default App;