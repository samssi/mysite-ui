import React from "react";

const ready = {
    color: "#6076c5",
    marginTop: "20px"
};

class Load extends React.Component {
    render() {
        return (<div>
                <div style={ready}>READY.</div>
                <div>{"LOAD\u0022MYSITE\u0022,8,1"}</div>
                <br />
                <div>SEARCHING FOR MYSITE</div>
                <div>LOADING</div>
                <div>READY.</div>
                <div>RUN</div>
            </div>)

    }

}

export default Load;