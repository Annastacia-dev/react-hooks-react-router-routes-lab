import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map(actor => {
      return (
        <div key={Math.floor(Math.random() * 10000)}>
          <h2>Name: {actor.name}</h2>
          <p>Movies:</p>
          <ul>
            {actor.movies.map(movie => {
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

export default Actors;
