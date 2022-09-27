import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map(director => {
      return (
        <div key={Math.floor(Math.random() * 10000)}>
          <h2>Name: {director.name}</h2>
          <p>Movies:</p>
          <ul>
            {director.movies.map(movie => {
              return (
                <li key={Math.floor(Math.random() * 10000)}>{movie}</li>
              )
            })}
          </ul>
        </div>
      )
    })}
    {/*{code here}*/}</div>;
}

export default Directors;
