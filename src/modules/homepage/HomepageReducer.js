import { combineReducers } from "redux";

const userList = (state = [], action) => {
  switch (action.type) {
    case "LOAD_USERS":
      return action.payload;
    default:
      return state;
  }
};

const selection = (state = false, action) => {
  switch (action.type) {
    case "SELECT_USER":
      return action.payload;
    case "CLEAR_SELECTION":
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  list: userList,
  selection
});
