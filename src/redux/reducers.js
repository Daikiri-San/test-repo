import { combineReducers } from "redux";
import Auth from "./auth/reducers";
import stringsReducer from "./strings/stringsReducer";
import title from "./pageTitle";

export default combineReducers({
  Auth,
  strings: stringsReducer,
  title,
});
