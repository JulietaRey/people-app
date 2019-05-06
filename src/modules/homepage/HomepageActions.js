import { getUserListCall } from "../../services/users";

export const loadUsers = () => async dispatch => {
  const users = await getUserListCall();
  dispatch({
    type: "LOAD_USERS",
    payload: users
  });
};

export const selectUser = user => ({
  type: "SELECT_USER",
  payload: user
});
