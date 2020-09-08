import React, { Component } from "react";
import MovieSearchForm from "./components/MovieSearchForm";
import MovieResult from "./components/MovieResult";
//import "./App.css";
import MovieNominations from "./components/MovieNominations";

class App extends Component {
  state = {
    serverResponse: {
      Response: "",
      Error: "",
      Search: [],
      totalResults: "",
    },
    movieName: "",
    movieNominants: [],
    disabledButtons: [],
    isFiveNominants: false,
  };

  serverResponseHandler = (serverResponse) => {
    this.setState({ serverResponse: serverResponse });
  };

  movieNamehandler = (name) => {
    this.setState({ movieName: name });
  };

  movieNominationshandler = (movie) => {
    if (this.state.movieNominants.length <=4) {
      this.setState({
        movieNominants: [...this.state.movieNominants, movie],
        disabledButtons: [...this.state.disabledButtons, movie.imdbID],
      });
    } else {
      this.setState({ isFiveNominants: true });
    }
  };

  movieRemoveNominhandler = (imdbIDNumber) => {
    let arrayM = [...this.state.movieNominants];
    if (imdbIDNumber !== -1) {
      arrayM.splice(imdbIDNumber, 1);
      this.setState({ movieNominants: arrayM });
      this.setState({ isFiveNominants: false });
    }
    this.setState({
      disabledButtons: this.state.disabledButtons.filter((item) => {
        return item !== imdbIDNumber;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>The Shoppies</h1>
        <MovieSearchForm
          onSearcMovieName={this.movieNamehandler}
          serverResponse={this.state.serverResponse}
        />
        <div className="row result nomination">
          <MovieResult
            serverResponseHandler={this.serverResponseHandler}
            movieName={this.state.movieName}
            movieNominationshandler={this.movieNominationshandler}
            disabledButtons={this.state.disabledButtons}
            serverResponse={this.state.serverResponse}
          />
          <MovieNominations
            movieNominants={this.state.movieNominants}
            isFiveNominants={this.state.isFiveNominants}
            movieRemoveNominhandler={this.movieRemoveNominhandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
