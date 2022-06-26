import { Link } from "react-router-dom";
import AddToFavourites from "./AddToFavourites";

export default function MovieCard({ movie }) {
  return (
    <div className="card bg-dark text-light text-center h-100">
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        className="card-img-top"
        alt={movie.original_title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text text-info p-1">Rating {movie.vote_average}</p>
        <div className="row justify-content-center">
          <div className="col-auto">
            <Link to={`/movie/${movie.id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
          <div className="col-auto">
            <AddToFavourites curMovie={movie}/>
          </div>
        </div>
      </div>
    </div>
  );
}
