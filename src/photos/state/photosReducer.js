import initialState from "../../state/reducers/initialState";
import * as types from "./actionTypes";

export default function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_DEFAULT_CHARACTERS:
      return action.payload.data;
    case types.GET_SEARCHED_CHARACTERS: {
      return action.payload.data;
    }
    default:
      return state;
  }
}
