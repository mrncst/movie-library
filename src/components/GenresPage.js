import React, { useContext, useEffect } from "react";
import Loader from "react-loader-spinner";
import FilmBox from "./FilmBox";
import axios from "axios";
import MainContext from "./MainContext";

const GenresPage = props => {
  const key = process.env.REACT_APP_API_KEY;
  const { setLoading, trending, setTrending, loading, setGenreId } = useContext(
    MainContext
  );
  const genre = props.location.pathname.split("/")[2];
  const genresDictionary = [
    {
      id: 28,
      name: "action"
    },
    {
      id: 12,
      name: "adventure"
    },
    {
      id: 16,
      name: "animation"
    },
    {
      id: 35,
      name: "comedy"
    },
    {
      id: 80,
      name: "crime"
    },
    {
      id: 99,
      name: "documentary"
    },
    {
      id: 18,
      name: "drama"
    },
    {
      id: 10751,
      name: "family"
    },
    {
      id: 14,
      name: "fantasy"
    },
    {
      id: 36,
      name: "history"
    },
    {
      id: 27,
      name: "horror"
    },
    {
      id: 10402,
      name: "music"
    },
    {
      id: 9648,
      name: "mystery"
    },
    {
      id: 10749,
      name: "romance"
    },
    {
      id: 878,
      name: "scifi"
    },
    {
      id: 53,
      name: "thriller"
    },
    {
      id: 10752,
      name: "war"
    }
  ];

  const genreId = genresDictionary.find(x => x.name === genre).id;

  useEffect(() => {
    let isValid = true;
    const fetchData = async () => {
      const genreList = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
      );
      if (!isValid) return;
      setLoading(true);
      setTrending(genreList.data.results);
      setGenreId(genreId);
      setLoading(false);
    };

    fetchData();
    window.scrollTo(0, 0);
    return () => {
      isValid = false;
    };
  }, [props.location]);

  return (
    <div className="container-gallery-page">
      <h1>{genre.toUpperCase()}</h1>
      <div className="loader container-gallery">
        {loading ? (
          <Loader
            className="loader"
            type="Grid"
            color="#6200EE"
            height={100}
            width={100}
            timeout={5000}
          />
        ) : (
          trending.map((item, i) => (
            <FilmBox
              name={item.original_title}
              posterPath={item.poster_path}
              averageScore={item.vote_average}
              id={item.id}
              key={item.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GenresPage;
