import { SET_FAVOURITES } from "../actions/favourites";

const INITIAL_STATE = {
  favouriteMovies: [],
};

export default function favouritesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FAVOURITES:
      return {
        ...state,
        favouriteMovies: [...action.payload],
      };
    default:
      return state;
  }
}
