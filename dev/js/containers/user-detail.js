import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
    render(){
        //when app first booted up,
        //prompt user to select a user
        if(!this.props.user){
            return (<div><h4>Select A user</h4></div>)
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} height="50" width="50"/>
                <h2>{this.props.user.first}{this.props.user.last}</h2>
                <h2>Age:{this.props.user.age}</h2>
                <h2>Description: {this.props.user.description}</h2>
            </div>
        );
    }
}

//this function takes a piece of the store object (called 
//a state) and passes it into your component as a property
function mapStateToProps(state){
    return{
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);
