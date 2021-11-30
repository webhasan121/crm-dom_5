import { createStore } from "redux";
// import combineReducers from "./reducres"; combineReducers = rootReducer [same path]
import rootReducer from "./reducres";
const initialState = {};

export const store = createStore(rootReducer, initialState);
