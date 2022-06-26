import { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
// import axiosInstance from "../network/axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { getMoviesList } from "../store/actions/movies";
import LanguageContext from "../context/language";

export default function Movies() {
  // axios
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   axiosInstance
  //     .get("/movie/popular", {
  //       params: {
  //         page,
  //       },
  //     })
  //     .then((res) => setMovies(res.data.results))
  //     .catch((error) => console.log(error));
  // }, [page]);

  // reducer-thunk
  const [page, setPage] = useState(1);
  const { contextLang, setContextLang } = useContext(LanguageContext);
  const movies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList({ page, language: contextLang }));
  }, [page, contextLang]);

  return (
    <div>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {movies.map((item) => (
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
