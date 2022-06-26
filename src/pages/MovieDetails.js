import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LanguageContext from "../context/language";
import axiosInstance from "../network/axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetails } from "../store/actions/movies";

export default function MovieDetails() {
  const { contextLang, setContextLang } = useContext(LanguageContext);
  const params = useParams();
  const navigate = useNavigate();

  // const [details, setDetails] = useState({});
  // useEffect(() => {
  //   axiosInstance
  //     .get(`/movie/${params.id}`, { params: { language: contextLang } })
  //     .then((res) => setDetails(res.data))
  //     .catch((error) => console.log(error));
  // }, [contextLang]);

  const details = useSelector((state) => state.movies.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetails({ language: contextLang }, params.id));
  }, [contextLang]);

  return (
    <div className="container my-5">
      <div className="card bg-dark text-light">
        <img
          src={"https://image.tmdb.org/t/p/w500" + details.poster_path}
          className="card-img-top my-3"
          alt={details.original_title}
          style={{
            height: "30em",
            objectFit: "contain",
          }}
        />
        <div className="card-body">
          <h3 className="card-title text-center">{details.title}</h3>
          <h4 className="card-title text-center">{details.original_title}</h4>
          <h5 className="card-text text-center">
            {contextLang === "en" ? "Language" : "اللغة"}:{" "}
            {details.original_language}
          </h5>
          <h6 className="card-text text-center">
            {contextLang === "en" ? "Rating" : "التقييم"}:{" "}
            {details.vote_average}
          </h6>
          <p className="card-text">{details.overview}</p>
        </div>
        <div className="card-body">
          <button onClick={() => navigate(-1)} className="btn btn-primary">
            {contextLang === "en" ? "Go back" : "الصفحة الرئيسية"}
          </button>
        </div>
      </div>
    </div>
  );
}
