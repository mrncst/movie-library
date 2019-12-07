import React from "react";
import BackButton from "./BackButton";

const MovieInfo = ({
  posterPath,
  title,
  language,
  year,
  averageScore,
  overview,
  imdbId,
  trailer,
  homepage
}) => {
  return (
    <div className="movie-info-container">
      <BackButton />
      <div className="movie-info-container-info">
        <img
          className="film-poster"
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt="Movie poster"
        />
        <div className="movie-info-container">
          <h3>{title}</h3>
          <p>
            {language} / {year}
          </p>
          <p>{averageScore} / 10</p>
          <p>{overview}</p>
          <div className="movie-info-container-info-buttons">
            <a
              href={`https://www.imdb.com/title/${imdbId}`}
              className="movie-info-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              IMBD
            </a>
            <a
              href={`https://www.youtube.com/watch?v=${trailer}`}
              className="movie-info-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              TRAILER
            </a>
            <a
              href={homepage}
              className="movie-info-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              HOMEPAGE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
