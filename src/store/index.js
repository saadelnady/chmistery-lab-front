import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";

import { userReducer } from "./reducers/userReducer/userReducer.js";
import { chemicalReducer } from "./reducers/chemicalReducer/chemicalReducer.js";
import { toolReducer } from "./reducers/ToolReducer/toolReducer.js";
import { experimentReducer } from "./reducers/experimentReducer/experimentReducer.js";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const appReducers = combineReducers({
  userReducer,
  chemicalReducer,
  toolReducer,
  experimentReducer,
});
export const store = createStore(appReducers, enhancer);
