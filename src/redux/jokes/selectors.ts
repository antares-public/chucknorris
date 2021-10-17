import { JokeFromServer, JokeList } from "../../interfaces";

export const selectFavorites = (state: JokeList) => state;

export const selectCheckJoke =
  (id: JokeFromServer["id"] | null) => (state: JokeList) => {
    return state.find((f) => f.id === id);
  };
