import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import HomepageReducer from "./modules/homepage/HomepageReducer";

const middleware = [thunk];

const store = createStore(
  combineReducers({
    users: HomepageReducer
  }),
  applyMiddleware(...middleware)
);

export default store;
