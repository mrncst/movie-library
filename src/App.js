import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import TrendingPage from './components/TrendingPage';
import MoviePage from './components/MoviePage';
import GenresPage from './components/GenresPage';
import MainContext from './components/MainContext';

function App() {

  const key = process.env.REACT_APP_API_KEY;
  
    const [trending, setTrending] = useState({ trending: [] });
    const [loading, setLoading] = useState({loading: false});
    const [movieInfo, setMovieInfo] = useState({title: '', overview: '', runtime: '', genres: '', 
                                                posterPath: '', year: '', voteAverage: '', language: ''});


    useEffect(() => {
      const fetchData = async () => {
          const result = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${key}`);
          setLoading(true);
          setTrending(result.data.results);
          setLoading(false);
  
      };
      
      fetchData();
      
  }, []);

  const value = {
    movieInfo, setMovieInfo, trending, loading, setTrending, setLoading
  };
  
  return (
    <MainContext.Provider value={value}>
      <BrowserRouter>
        <div className="container">
          <Header/>
          <div className='page-area'>
            <Switch>
              <Route exact path='/' component={TrendingPage} />
              <Route path='/movie' component={MoviePage} />
              <Route path='/genres' component={GenresPage} />
              <Route exact path='/discover/popular' component={TrendingPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
