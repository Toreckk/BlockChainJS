import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

//Register User
export const register = ({ name, email, password }) => dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  //Request body
  const body = JSON.stringify({ name, email, password });

  axios
    .post("/wallet", body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      /*dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );*/
      dispatch({
        type: REGISTER_FAIL
      });
    });
};
