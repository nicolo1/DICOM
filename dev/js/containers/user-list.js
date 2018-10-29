import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions';

//this will generate a list of users
class UserList extends Component{
    createListItems(){
        //map loops through the array of users
        //and performs the function to each element
        return this.props.users.map((user) => {
            return <li 
                key={user.id}
                //whenever a user clicks a username, display user details
                onClick={() => this.props.selectUser(user)}
            >
                {user.first} {user.last}
            </li>
        })
    }
    render(){
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

//this function takes a piece of the store object (called 
//a state) and passes it into your component as a property
function mapStateToProps(state){
    return{
        users:state.users
    }
}

//this function passes the selectUser action as a prop
function matchDispatchToProps(dispatch){
    //this is a synonym for connect 
    return bindActionCreators({selectUser: selectUser}, dispatch)
}


//taking UserList component and making it 'aware' of 
//store data, it is now in scope of the component
export default connect(mapStateToProps, matchDispatchToProps)(UserList);