import 'babel-polyfill'; 
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux'; 
import allReducers from './reducers'; 
import App from './components/app';


const store = createStore(allReducers);

ReactDOM.render(
    //the store paramater allows
    //makes the store available to 
    //all components in your provider
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
