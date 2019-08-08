import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import profile from "./profile";
import transactions from "./transactions";

export default combineReducers({ auth, alert, profile, transactions });
