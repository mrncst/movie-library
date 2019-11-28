import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import PopularPage from './components/PopularPage';
import GenresPage from './components/GenresPage';

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <div className='page-area'>
          <Switch>
          <Route path='/' component={PopularPage} ></Route>
          <Route exact path='/discover/popular' component={PopularPage} ></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
