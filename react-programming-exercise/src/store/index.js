import { createStore } from "redux";
import { combineReducers } from "redux";
import sensorReducer from "./sensorReducer";

const rootReducer = combineReducers({ sensorReducer });

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );