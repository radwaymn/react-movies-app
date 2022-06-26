import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setFavourites } from "../store/actions/favourites";
import { useEffect, useState } from "react";

export default function AddToFavourites({ curMovie }) {
  const favMovies = useSelector((state) => state.favMovies.favouriteMovies);
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(favMovies.some((elm)=>elm.id === curMovie.id));

  const togglefav = () => {
    setIsFav(!isFav);
  };

  useEffect(() => {
    if (isFav && !favMovies.some((elm)=>elm.id === curMovie.id)) favMovies.push(curMovie);
    dispatch(
      setFavourites(
        isFav ? favMovies : favMovies.filter(item => item.id !== curMovie.id)
      )
    );
  }, [isFav]);

  return (
    <>
      <FontAwesomeIcon
        icon={isFav ? faHeartSolid : faHeartRegular}
        size="2x"
        className="text-danger"
        onClick={togglefav}
      />
    </>
  );
}
