import React, { Component } from "react";
import MoviesList from "../moviesList";

class FetchJSon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.fetchIt();
  }
  fetchIt() {
    fetch("https://startmeup.herokuapp.com/api/movies")
      .then(list => list.json())
      .then(media => {
        this.setState(prevState => {
          return {
            movies: media
          };
        });
      });
  }

  render() {
    return (
      <div>
        <h1>start me up</h1>
        <a
          href="https://startmeup.herokuapp.com/api/movies"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://startmeup.herokuapp.com/api/movies
        </a>
        <MoviesList list={this.state.movies} />
      </div>
    );
  }
}

export default FetchJSon;
