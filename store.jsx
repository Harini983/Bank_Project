// store/store.js
import { createStore, combineReducers } from 'redux';
import transactionReducer from './transactionReducer'; // Import your reducers

// Combine reducers in case you have multiple reducers
const rootReducer = combineReducers({
  transactions: transactionReducer,
});

// Create the Redux store and add devtools extension for easier debugging
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
