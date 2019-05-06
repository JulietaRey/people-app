import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import HomepageReducer from "./modules/homepage/HomepageReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const store = createStore(
  combineReducers({
    users: HomepageReducer
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
