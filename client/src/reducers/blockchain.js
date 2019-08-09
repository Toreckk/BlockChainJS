import {
  GET_PENDING_TRANSACTIONS,
  PENDING_TRANSACTIONS_ERROR,
  MINED_BLOCK_SUCCESS,
  MINED_BLOCK_FAIL,
  SEND_TX_SUCCESS,
  SEND_TX_FAIL
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
    case MINED_BLOCK_FAIL:
    case PENDING_TRANSACTIONS_ERROR:
    case SEND_TX_FAIL:
      return {
        ...state,
        pendingTransactions: [],
        loading: false,
        error: payload
      };
    case MINED_BLOCK_SUCCESS:
      return {
        ...state,
        pendingTransactions: [],
        loading: false,
        error: {}
      };
    case SEND_TX_SUCCESS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
