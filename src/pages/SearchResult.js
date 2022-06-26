import { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import LanguageContext from "../context/language";
import axiosInstance from "../network/axiosInstance";
import { searchMovies } from "../store/actions/movies";

export default function SearchResult() {
  const params = useParams();
  const [query, setQuery] = useState(params.query);
  const [page, setPage] = useState(1);
  const { contextLang, setContextLang } = useContext(LanguageContext);
  const movies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();
  // const [movies, setMovies] = useState([]);

  useEffect(() => {
    setQuery(params.query);
  }, [params]);

  // useEffect(() => {
  //   axiosInstance
  //     .get("/search/movie", {
  //       params: {
  //         query,
  //         page,
  //         language: contextLang
  //       },
  //     })
  //     .then((res) => setMovies(res.data.results))
  //     .catch((error) => console.log(error));
  // }, [page, query]);

  useEffect(() => {
    dispatch(searchMovies({ query, page, language: contextLang }));
  }, [page, query, contextLang]);

  return (
    <div>
      <div className="container my-5">
        <h2 className="alert alert-info text-center mb-5">
          Search results for: {query}
        </h2>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {movies?.map((item) => (
            <div key={item.id} className="col my-3">
              <MovieCard movie={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-dark p-3 text-light">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-auto">
              <button
                className="btn btn-primary"
                onClick={() => setPage(page > 1 ? page - 1 : 1)}
              >
                Previous
              </button>
            </div>
            <div className="col-auto fs-5">Page: {page}</div>
            <div className="col-auto">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
