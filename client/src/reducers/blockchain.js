import {
  GET_PENDING_TRANSACTIONS,
  PENDING_TRANSACTIONS_ERROR
} from "../actions/types";

const initialState = {
  blockchain: [],
  pendingTransactions: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PENDING_TRANSACTIONS:
      return {
        ...state,
        pendingTransactions: payload,
        loading: false
      };
    case PENDING_TRANSACTIONS_ERROR:
      return {
        ...state,
        pendingTransactions: [],
        loading: false,
        error: payload
      };

    default:
      return state;
  }
}
