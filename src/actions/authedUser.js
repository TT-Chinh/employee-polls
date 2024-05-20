export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_USER = "LOGOUT_USER";

function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

function logout(){
  return {
    type: LOGOUT_USER,
  }
}

export function handleLogin(id) {
  return dispatch => dispatch(setAuthedUser(id));
}

export function handleLogout() {
  return dispatch => dispatch(logout());
}