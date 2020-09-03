import React, { Component } from "react";
import MovieSearchForm from "./components/MovieSearchForm";
import MovieResult from "./components/MovieResult";
import "./App.css";
import MovieNominations from "./components/MovieNominations";

class App extends Component {
  state = {
    movieName: ""
  };

  movieNamehandler = (name) => {
    this.setState({movieName: name});
}

  render() {
    return (
      <div className="App">
        <h1>The Shoppies</h1>
        <MovieSearchForm onSearcMovieName={this.movieNamehandler} />
        <div className="Result Nomination">
          <MovieResult movieName={this.state.movieName} />
          <MovieNominations />
        </div>
      </div>
    );
  }
}

export default App;
