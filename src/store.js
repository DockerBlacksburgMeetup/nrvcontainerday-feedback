
import {compose, createStore} from 'redux';
import reducers from "./reducers";
import middleware from "./middleware";
import {APP_INIT} from "./constants";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const key = "containerDayRedux";
const persistedState = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : {};
const store = createStore(reducers, persistedState, composeEnhancers(middleware));

store.subscribe(() => {
  localStorage.setItem(key, JSON.stringify(store.getState()))
});

store.dispatch({ type : APP_INIT });

export default store;