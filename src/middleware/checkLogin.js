import { SET_AUTHED_USER } from "../actions/authedUser";

const checkLogin = (store) => (next) => (action) => {
    if(action.type === SET_AUTHED_USER){
        const { users } = store.getState();
        if(!users[action.id]){
            return alert("User do not exists. Please try again.");
        }
    }
    return next(action);
}

export default checkLogin;