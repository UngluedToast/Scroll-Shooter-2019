import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import Game from './containers/Game'
import * as serviceWorker from './serviceWorker';

import reducer from './reducers'

// store
const store = createStore (
    reducer,
    window.__REDUX_DEVTOOLS_EXTENTSION__ && window.__REDUX_DEVTOOLS_EXTENTSION__(),
);






/* the route */


ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister()

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
