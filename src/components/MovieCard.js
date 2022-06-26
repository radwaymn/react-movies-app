import { useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../context/language";
import AddToFavourites from "./AddToFavourites";

export default function MovieCard({ movie }) {
  const { contextLang, setContextLang } = useContext(LanguageContext);

  return (
    <div className="card bg-dark text-light text-center h-100">
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        className="card-img-top"
        alt={movie.original_title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text text-info p-1">
          {contextLang == "en" ? "Rating" : "التقييم"} {movie.vote_average}
        </p>
        <div className="row justify-content-center">
          <div className="col-auto">
            <Link to={`/movie/${movie.id}`} className="btn btn-primary">
              {contextLang == "en" ? "Details" : "التفاصيل"}
            </Link>
          </div>
          <div className="col-auto">
            <AddToFavourites curMovie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
}
