import React from 'react';
import ReactDOM from 'react-dom';
import Cv from './components/Cv';

const content = ['Foo', 'Bar'];

ReactDOM.render(
    <Cv content={content} />,
    document.getElementById('app')
);

