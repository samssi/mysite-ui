import React from 'react';
import ReactDOM from 'react-dom';
import Cursor from '../style/Cursor'
import Letter from './Letter'

class Application extends React.Component {
    render() {
        return (<div>
                    <Letter />
                  </div>
        );
    }
}

export default Application;