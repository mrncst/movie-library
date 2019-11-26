import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SideMenu from './components/SideMenu';

function App() {
  const key = process.env.REACT_APP_API_KEY;
  // https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg

  axios.get(`https://api.themoviedb.org/3/discover/movie/?api_key=${key}&sort_by=popularity.desc&include_adult=false`)
    .then(res => console.log(res));

  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`)
  .then(res => console.log(res));


  return (
    <BrowserRouter>
      <div className="container">
        <SideMenu/>
        <Switch>
          <Route exact path='/popular' ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
