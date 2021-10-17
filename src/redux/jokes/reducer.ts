import { JokeList } from "../../interfaces";
import { TYPES } from "../actionTypes";

const initialState: JokeList = [];

const favoritesReducer = (state: JokeList = initialState, action: any) => {
  switch (action.type) {
    case TYPES.GET_JOKES:
      return action.payload;
    case TYPES.ADD_JOKE:
      return [...state, action.payload];
    case TYPES.REMOVE_JOKE:
      return state.filter((f) => f.id !== action.payload);
    case TYPES.CLEAR_FAVORITES:
      return [];
    default:
      return state;
  }
};

export default favoritesReducer;
