import { combineReducers } from "redux";
import auth from "./authReducer";
import info from "./infoReducer";

const appReducer = combineReducers({ auth, info });
export default appReducer;
