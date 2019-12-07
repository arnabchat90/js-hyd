import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

export function configureStore(initialState = {}) {
  return createStore(reducers, initialState, applyMiddleware(thunk));
}
