import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FavouriteMovies from "./pages/FavouriteMovies";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SearchResult from "./pages/SearchResult";
import { useState } from "react";
// import { useSelector } from "react-redux";
import LanguageContext from "./context/language";

function App() {
  const [contextLang, setContextLang] = useState("en");
  return (
    <Router>
      <LanguageContext.Provider value={{ contextLang, setContextLang }}>
        <div
          dir={contextLang === "en" ? "ltr" : "rtl"}
          className={contextLang === "en" ? "text-left" : "text-right"}
        >
          <Navbar/>
          <Routes>
            <Route path="/" element={<Movies/>} />
            <Route path="favourites" element={<FavouriteMovies />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="search/:query" element={<SearchResult />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </LanguageContext.Provider>
    </Router>
  );
}

export default App;
