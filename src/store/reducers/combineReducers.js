import { combineReducers } from "redux";
import favouritesReducer from "./favourites";
import moviesReducer from "./movies";

export default combineReducers({
    favMovies: favouritesReducer,
    movies: moviesReducer
})