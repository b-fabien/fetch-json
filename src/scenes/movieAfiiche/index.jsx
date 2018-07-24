import React from "react";

const MovieAfiiche = props => (
  <figure>
    <img
      src={props.src}
      alt={`numero ${props.numero} : ${props.title}`}
      title={props.title}
    />

    <figcaption>{props.title}</figcaption>
  </figure>
);

export default MovieAfiiche;
