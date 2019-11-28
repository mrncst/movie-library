import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

const PopularPage = () => {
    
    const [state, setState] = useState({genre: [], isLoading: true});
  
    // https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg
    //axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`)
    //.then(res => console.log(res));
  
    useEffect(() => {
        const key = process.env.REACT_APP_API_KEY;
      
        axios.get(`https://api.themoviedb.org/3/discover/movie/?api_key=${key}&sort_by=popularity.desc&include_adult=false`)
            .then(res => {
                console.log(res);

                // setState({
                //     isLoading: false
                // });
            });
      });

      console.log(state.isLoading);
    
    return (

        <div>
            <h1>POPULAR</h1>
            {state.isLoading ? <Loader type='grid' 
                        color='#6200EE' 
                        height={100}
                        width={100}
                        timeout={3000}/> :
                    <p>Lalala</p>
                    }
        </div>

)};

export default PopularPage;