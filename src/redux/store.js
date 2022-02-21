import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import authReducer from './auth-reducer';
import cartReducer from './cart-reducer';
import catalogReducer from './catalog-reducer';

const reducers = combineReducers({
  cart: cartReducer,
  catalog: catalogReducer,
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware()));

export default store;
