// src/store/transactionReducer.js

import { ADD_TRANSACTION } from './transactionActions';

const initialState = {
  transactions: [],
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

export default transactionReducer;
