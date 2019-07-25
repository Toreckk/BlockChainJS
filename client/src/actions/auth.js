import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "./types";
import { setAlert } from "./alerts";
import setAuthToken from "../utils/setAuthToken";

//Load User
export const loadUser = () => dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  axios
    .get("/api/auth")
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: AUTH_ERROR
      })
    );
};

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
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      dispatch(loadUser());
    })
    .catch(err => {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

///////////////
//Login User//
/////////////
export const login = (email, password) => dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  //Request body
  const body = JSON.stringify({ email, password });

  axios
    .post("/api/auth", body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      dispatch(loadUser());
    })
    .catch(err => {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: LOGIN_FAIL
      });
    });
};
