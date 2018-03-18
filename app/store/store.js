import { createStore, applyMiddleware } from 'redux';
//  import { createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from '../reducers/';
// const navmiddleware = createReactNavigationReduxMiddleware(
//   "root",
//   state => state.nav,
// );
const middleware = applyMiddleware(promise(), thunk, createLogger());
// const middleware = applyMiddleware(promise(), thunk);
const store = createStore(reducer, middleware);
// ==================================================================
export default store;