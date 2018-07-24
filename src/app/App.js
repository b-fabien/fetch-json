import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import MoviesList from "../components/moviesList";

class App extends Component {
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
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
      </div>
    );
  }
}

export default App;
