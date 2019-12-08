import React, { useEffect, useContext } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import MainContext from "./MainContext";
import MovieInfo from "./MovieInfo";

const MoviePage = props => {
  const key = process.env.REACT_APP_API_KEY;
  const { setLoading, movieInfo, setMovieInfo, loading } = useContext(
    MainContext
  );

  useEffect(() => {
    const fetchData = async () => {
      const id = props.location.pathname.split("/")[2];
      setLoading(true);
      const [result, trailer] = await Promise.all([
        axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
        ),
        axios.get(
          `http://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}`
        )
      ]);

      setMovieInfo(() => {
        return {
          title: result.data.title,
          overview: result.data.overview,
          genres: result.data.genres,
          runtime: result.data.runtime,
          posterPath: result.data.poster_path,
          voteAverage: result.data.vote_average,
          language: result.data.spoken_languages[0].name,
          year: result.data.release_date.split("-")[0],
          imdbId: result.data.imdb_id,
          homepage: result.data.homepage,
          trailer: trailer.data.results[0].key
        };
      });
      setLoading(false);
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [props.location]);

  return (
    <div className="movie-page">
      {loading ? (
        <Loader
          type="Grid"
          color="#6200EE"
          height={100}
          width={100}
          timeout={3000}
        />
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
          imdbId={movieInfo.imdbId}
          homepage={movieInfo.homepage}
          trailer={movieInfo.trailer}
        />
      )}
    </div>
  );
};

export default MoviePage;
