import React from 'react';
import UserList from '../containers/user-list.js';
import UserDetails from '../containers/user-detail.js';
require('../../scss/style.scss');

//short hand syntax for making a function
const App = () => (
    <div>
        <h2>Username List:</h2>
        <UserList/>
        <hr/>
        <h2>User Details:</h2>
        <UserDetails/>
    </div>
);

//whenever this file is included in
//another application, this is what 
//will be exported.
export default App;