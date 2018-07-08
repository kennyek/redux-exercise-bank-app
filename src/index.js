import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const render = () => {
  ReactDOM.render(<AppContainer />, document.getElementById('root'));
}

store.subscribe(render);

render();
registerServiceWorker();
