import React from "react";

const MovieAffiche = props => (
  <figure>
    <img
      src={props.src}
      alt={`numero ${props.numero} : ${props.title}`}
      title={props.title}
    />

    <figcaption>{props.title}</figcaption>
  </figure>
);

export default MovieAffiche;
