import React from "react";
import MovieAfiiche from "../movieAffiche";

const MoviesList = props => (
  <ul>
    {props.list.map(movie => (
      <li key={movie.id}>
        <MovieAfiiche numero={movie.id} title={movie.title} src={movie.image} />
      </li>
    ))}
  </ul>
);

export default MoviesList;
