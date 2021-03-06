import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import TrendingPage from "./components/TrendingPage";
import MoviePage from "./components/MoviePage";
import GenresPage from "./components/GenresPage";
import MainContext from "./components/MainContext";
import SurpriseMePage from "./components/SurpriseMePage";
import FadeIn from "react-fade-in";

const App = () => {
  const [trending, setTrending] = useState({ trending: [] });
  const [loading, setLoading] = useState({ loading: false });
  const [movieInfo, setMovieInfo] = useState({
    title: "",
    overview: "",
    runtime: "",
    genres: "",
    posterPath: "",
    year: "",
    voteAverage: "",
    language: ""
  });
  const [genreIdMain, setGenreId] = useState("");
  const [disable, setDisable] = useState(true);

  const value = {
    movieInfo,
    setMovieInfo,
    trending,
    loading,
    setTrending,
    setLoading,
    setGenreId,
    genreIdMain,
    disable,
    setDisable
  };

  return (
    <MainContext.Provider value={value}>
      <BrowserRouter>
        <div className="container">
          <Header />
          <div className="page-area">
            <Switch>
              <FadeIn>
                <Route exact path="/" component={TrendingPage} />
                <Route path="/movie" component={MoviePage} />
                <Route path="/genres" component={GenresPage} />
                <Route
                  exact
                  path="/discover/surprise-me"
                  component={SurpriseMePage}
                />
                <Route
                  exact
                  path="/discover/popular"
                  component={TrendingPage}
                />
              </FadeIn>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </MainContext.Provider>
  );
};

export default App;
