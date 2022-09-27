import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map(movie => {
        return (
          <div key={Math.floor(Math.random() * 10000)}>
            <h2>{movie.title}</h2>
            <p>Time: {movie.time}</p>
            <p>Genres:</p>
            <ul>
              {movie.genres.map(genre => {
                return (
                  <li key={Math.floor(Math.random() * 10000)}>
                    {genre}
                  </li>
                )
              })}
            </ul>
            </div>
        )
      })}
    
    {/*{code here}*/}</div>;
}

export default Movies;
