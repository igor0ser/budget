import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(React.createElement(App), document.getElementById('root'));
registerServiceWorker();
