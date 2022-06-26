import axiosInstance from "../../network/axiosInstance";

export const GET_MOVIES_List = "GET_MOVIES_List";
export const GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";
export const SEARCH_MOVIES = "SEARCH_MOVIES";

export const getMoviesList = (params) => (dispatch) => {
  return axiosInstance
    .get("/movie/popular", { params })
    .then((res) =>
      dispatch({
        type: GET_MOVIES_List,
        payload: res.data.results,
      })
    )
    .catch((error) => console.log(error));
};

export const getMovieDetails = (params, id) => (dispatch) => {
  return axiosInstance
    .get(`/movie/${id}`, { params })
    .then((res) =>
      dispatch({
        type: GET_MOVIE_DETAILS,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error));
};

export const searchMovies = (params) => (dispatch) => {
  return axiosInstance
    .get("/search/movie", { params })
    .then((res) => {
      dispatch({
        type: SEARCH_MOVIES,
        payload: res.data.results,
      });
    })
    .catch((error) => console.log(error));
};
