import React from "react";
import MovieAfiiche from "../movieAfiiche";

const MoviesList = props => (
  <ul>
    {console.log(props.list)}
    {props.list.map(movie => (
      <li key={movie.id}>
        {
          <MovieAfiiche
            numero={movie.id}
            title={movie.title}
            src={movie.image}
          />
        }
      </li>
    ))}
  </ul>
);

export default MoviesList;
