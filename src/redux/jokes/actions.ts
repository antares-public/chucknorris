import { JokeFromServer, JokeList } from "../../interfaces";
import { TYPES } from "../actionTypes";

export const fetchToFavorites = (jokes: JokeList) => ({
  type: TYPES.GET_JOKES,
  payload: jokes,
});

export const addToFavorites = (joke: JokeFromServer) => ({
  type: TYPES.ADD_JOKE,
  payload: joke,
});

export const removeFromFavorites = (jokeId: JokeFromServer["id"]) => ({
  type: TYPES.REMOVE_JOKE,
  payload: jokeId,
});

export const clearFavorites = () => ({
  type: TYPES.CLEAR_FAVORITES,
});
