import React from 'react';
import ReactDOM from 'react-dom';

const headerBanner = {
    'padding-top': '20px',
    'text-align': 'center',
    'color': '#6076c5',
    'background-color': '#20398d',
    display: 'block'
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
