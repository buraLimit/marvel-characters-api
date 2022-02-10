import { combineReducers } from "redux";
import characters from "../../photos/state/photosReducer";

const rootReducer = combineReducers({
  characters,
});

export default rootReducer;
