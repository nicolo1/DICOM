export default function(state=null, action){
    switch(action.type){
        //whenever a user is selected,
        //return the payload, which is
        //the user that was selected.
        case "USER_SELECTED":
            return action.payload;
        break;
    }
    return state;
}