import React, { useContext, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import FilmBox from "./FilmBox";
import MainContext from "./MainContext";

const TrendingPage = props => {
  const key = process.env.REACT_APP_API_KEY;
  const { setLoading, setTrending, loading, trending } = useContext(
    MainContext
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${key}`
      );
      setLoading(true);
      setTrending([...result.data.results]);
      console.log([...result.data.results]);
      setLoading(false);
    };

    fetchData();
  }, [props.location]);

  return (
    <div className="container-gallery-page">
      <h1>TRENDING THIS WEEK</h1>
      <div className="loader container-gallery">
        {loading ? (
          <Loader
            type="Grid"
            color="#6200EE"
            height={100}
            width={100}
            timeout={3000}
          />
        ) : (
          trending.map(item => (
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

export default TrendingPage;
