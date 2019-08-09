import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

import {
  GET_PENDING_TRANSACTIONS,
  PENDING_TRANSACTIONS_ERROR,
  MINED_BLOCK_SUCCESS,
  MINED_BLOCK_FAIL,
  SEND_TX_SUCCESS,
  SEND_TX_FAIL
} from "./types";

export const getPendingTransactions = () => dispatch => {
  axios
    .get("/transaction/pending")
    .then(res =>
      dispatch({
        type: GET_PENDING_TRANSACTIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: PENDING_TRANSACTIONS_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      })
    );
};

export const minePendingTransactions = publicKey => dispatch => {
  //Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  //Request body
  const body = JSON.stringify({ publicKey });
  axios
    .post("/mine", body, config)
    .then(res =>
      dispatch({
        type: MINED_BLOCK_SUCCESS
      })
    )
    .catch(err =>
      dispatch({
        type: MINED_BLOCK_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status }
      })
    );
};

//Send transaction w/token
export const sendTransaction = (amount, toAddress) => dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  //Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify({ amount, toAddress });

  axios
    .post("/transaction", body, config)
    .then(res =>
      dispatch({
        type: SEND_TX_SUCCESS
      })
    )
    .catch(err =>
      dispatch({
        type: SEND_TX_FAIL
      })
    );
};
