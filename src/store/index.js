import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import allReducers from "./reducer";

const { logReducer, techReducer } = allReducers;
let reducers = combineReducers({
  log: logReducer,
  tech: techReducer,
});
let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
