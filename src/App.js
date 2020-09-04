import React, { Component } from "react";
import MovieSearchForm from "./components/MovieSearchForm";
import MovieResult from "./components/MovieResult";
import "./App.css";
import MovieNominations from "./components/MovieNominations";

class App extends Component {
  state = {
    movieName: "",
    movieNominants: []
  };

  movieNamehandler = (name) => {
    this.setState({movieName: name});
}
movieNominationshandler = (movie) => {
  console.log('movie.Title', movie.Title)
  this.setState({    
    movieNominants:[...this.state.movieNominants, movie]
  });
}

  render() {
    return (
      <div className="App">
        <h1>The Shoppies</h1>
        <MovieSearchForm onSearcMovieName={this.movieNamehandler} />
        <div className="row Result Nomination">
          <MovieResult movieName={this.state.movieName} movieNominationshandler={this.movieNominationshandler} />
          <MovieNominations  movieNominants={this.state.movieNominants} />
        </div>
      </div>
    );
  }
}

export default App;
