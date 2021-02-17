import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, applyMiddleware} from "redux";

import App from './components/App'
import reducers from './reducers'


const store = createStore(reducers,composeWithDevTools())


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,document.querySelector('#root')
)