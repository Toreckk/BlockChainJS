import axios from "axios";
import { GET_PENDING_TRANSACTIONS, PENDING_TRANSACTIONS_ERROR } from "./types";

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

/*
For future use
//Send transaction w/token
export const sendTransaction = (amount, toAddress) => {
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
};*/
