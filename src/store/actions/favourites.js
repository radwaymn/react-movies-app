export const SET_FAVOURITES = "SET_FAVOURITES";
// export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";

export const setFavourites = (payload) => {
  return {
    type: SET_FAVOURITES,
    payload,
  };
};
