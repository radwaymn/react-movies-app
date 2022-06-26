import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

export default function FavouriteMovies() {
  const favMovies = useSelector((state) => state.favMovies.favouriteMovies);

  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {favMovies.map((item) => (
          <div key={item.id} className="col my-3">
            <MovieCard movie={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
