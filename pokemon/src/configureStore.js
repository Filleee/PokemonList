import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import allReducers from "./reducers";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
