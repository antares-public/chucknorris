import { createStore } from "redux";
import favoritesReducer from "./jokes/reducer";

const store = createStore(favoritesReducer);

export default store;
