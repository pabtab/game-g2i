import { combineReducers } from "redux";
import Questions from "./questions.reducer";
import Responses from "./responses.reducer";

const rootReducer = combineReducers({
  Questions,
  Responses
});


export default rootReducer;
