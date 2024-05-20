export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_USER = "LOGOUT_USER";

function setAuthedUser(user) {
  return {
    type: SET_AUTHED_USER,
    user,
  };
}

function logout(){
  return {
    type: LOGOUT_USER,
  }
}

export function handleLogin(user) {
  return dispatch => dispatch(setAuthedUser(user));
}

export function handleLogout() {
  return dispatch => dispatch(logout());
}