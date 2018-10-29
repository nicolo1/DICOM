//--- --- this file will have combined the reducers in this directory. --- --- 

//combineReducers takes each reducer as an object and combines them together
import {combineReducers} from 'redux'; 

//importing data into variable UserReducer
import UserReducer from './reducer-users';

import ActiveUserReducer from './reducer-active-user.js';

//main object that will be thrown into the store.
const allReducers = combineReducers({
    //initializing users object with data from reducer-users file,
    //which was stored into the UserReducer variable.
    users:UserReducer,
    activeUser:ActiveUserReducer
});

export default allReducers;