import rootReducer from "./reducer";

import rootSaga from "../saga/rootSaga";
import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}