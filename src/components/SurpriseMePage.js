import React, { useContext } from "react";
import axios from "axios";
import MovieInfo from "./MovieInfo";
import MainContext from "./MainContext";
import "react-dropdown/style.css";

const SurpriseMePage = () => {
  const {
    setLoading,
    disable,
    setDisable,
    movieInfo,
    setMovieInfo
  } = useContext(MainContext);
  const key = process.env.REACT_APP_API_KEY;

  const handleSurpriseSubmit = e => {
    e.preventDefault();
    const inputMovie = [e.target.elements[0].value.split(" ")][0]
      .join("+")
      .toLowerCase();
    const fetchData = async () => {
      const movieFetch = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${inputMovie}`
      );
      const movieId = movieFetch.data.results[0].id;
      const recommendedMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}}/recommendations?api_key=${key}&language=en-US&page=1`
      );
      const recommendation =
        recommendedMovies.data.results[
          Math.floor(Math.random() * (20 - 1) + 1)
        ];

      setLoading(true);
      setMovieInfo(() => {
        return {
          title: recommendation.original_title,
          overview: recommendation.overview,
          genres: recommendation.genre_ids,
          runtime: "",
          posterPath: recommendation.poster_path,
          voteAverage: recommendation.vote_average,
          language: recommendation.original_language,
          year: recommendation.release_date.split("-")[0]
        };
      });
      setDisable(false);
      setLoading(false);
    };
    fetchData();
    window.scrollTo(0, 0);
  };

  return (
    <div className="SurpriseMePage">
      <h1>SURPRISE ME</h1>
      <div className="surprise-me-box">
        <form className="suprise-me-form" onSubmit={handleSurpriseSubmit}>
          <p className="surprise-me-text">
            I WANNA WATCH A MOVIE SIMILAR TO&nbsp;&nbsp;{" "}
            <input className="surprise-me-input" type="text" />
          </p>
          <button className="surprise-me-button">SEARCH</button>
        </form>
        <div className="surprise-me-movie-info">
          {disable ? (
            ""
          ) : (
            <MovieInfo
              title={movieInfo.title}
              posterPath={movieInfo.posterPath}
              averageScore={movieInfo.voteAverage}
              overview={movieInfo.overview}
              genres={movieInfo.genres}
              runtime={movieInfo.runtime}
              language={movieInfo.language}
              year={movieInfo.year}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SurpriseMePage;
