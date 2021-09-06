import { combineReducers } from "redux";
import matchReducer from "./scouting/reducer";

const rootReducer = combineReducers({
  match: matchReducer,
});
export default rootReducer;
