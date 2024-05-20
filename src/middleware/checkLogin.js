import { SET_AUTHED_USER } from "../actions/authedUser";

const checkLogin = (store) => (next) => (action) => {
    if(action.type === SET_AUTHED_USER){
        const { id, password } = action.user;
        const { users } = store.getState();
        const user = Object.values(users).find(u => u.id === id && u.password === password);
        if(!user){
            return alert("Invalid user or password. Please try again.");
        }
    }
    return next(action);
}

export default checkLogin;