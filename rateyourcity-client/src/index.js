import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';

import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, applyMiddleware(reduxThunk));


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.querySelector('#root'));
