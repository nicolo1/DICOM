//this is the action creator, its the function
export const selectUser = (user) => {
    console.log("you clicked on user:", user.first);
    //this is the action, its returning something.
    return{
        //the name of the event
        type:"USER_SELECTED",
        //paramater passed from function
        payload: user
    }
};