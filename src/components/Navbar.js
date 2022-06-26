import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LanguageContext from "../context/language";
import ChangeContextLanguage from "./ChangeContextLanguage";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const favMovies = useSelector((state) => state.favMovies.favouriteMovies);
  const { contextLang, setContextLang } = useContext(LanguageContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`navbar-nav mb-2 mb-lg-0 ${contextLang ==="en"? "me-auto" : "ms-auto"}`}>
            <li className="nav-item">
              <Link className="nav-link active fs-5" aria-current="page" to="/">
                {contextLang ==="en"? "Movies" : "أفلام"}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/favourites">
                {contextLang ==="en"? "Favourites": "التفضيلات"}: {favMovies.length}
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control mx-2"
              type="search"
              placeholder={contextLang ==="en"? "Search": "بحث"}
              aria-label="Search"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link to={`/search/${searchQuery}`} className="btn btn-primary">
            {contextLang ==="en"? "Search": "بحث"}
            </Link>
          </form>
          <ChangeContextLanguage/>
        </div>
      </div>
    </nav>
  );
}
