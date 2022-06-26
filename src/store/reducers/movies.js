import {
  GET_MOVIES_List,
  GET_MOVIE_DETAILS,
  SEARCH_MOVIES,
} from "../actions/movies";

const INITIAL_STATE = {
  list: [],
  details: {},
};

export default function moviesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MOVIES_List:
    case SEARCH_MOVIES:
      return {
        ...state,
        list: action.payload,
      };
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    default:
      return state;
  }
}
