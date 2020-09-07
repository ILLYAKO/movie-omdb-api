import React, { Component } from "react";
import MovieSearchForm from "./components/MovieSearchForm";
import MovieResult from "./components/MovieResult";
import "./App.css";
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
    if (this.state.movieNominants.length < 5) {
      this.setState({
        movieNominants: [...this.state.movieNominants, movie],
        disabledButtons: [...this.state.disabledButtons, movie.imdbID],
      });
    } else {
      this.setState({ isFiveNominants: true });
    }

    // if (this.state.disabledButtons.length < 5) {
    //   this.setState({
    //     disabledButtons: [...this.props.disabledButtons, movie.imdbID],//////
    //   });
    // }
  };

  movieRemoveNominhandler = (index) => {
    let arrayM = [...this.state.movieNominants];
    console.log("index", index);
    if (index !== -1) {
      arrayM.splice(index, 1);
      this.setState({ movieNominants: arrayM });
      this.setState({ isFiveNominants: false });
    }
    ////////////////
    let arrayB = [...this.state.disabledButtons];
    console.log("indexB", index);
    if (index !== -1) {
      arrayB.splice(index, 1);
      this.setState({ disabledButtons: arrayB });
    }


  };

  render() {
    return (
      <div className="App">
        <h1>The Shoppies</h1>
        <MovieSearchForm
          onSearcMovieName={this.movieNamehandler}
          serverResponse={this.state.serverResponse}
        />
        <div className="row Result Nomination">
          <MovieResult
            serverResponseHandler={this.serverResponseHandler}
            movieName={this.state.movieName}
            movieNominationshandler={this.movieNominationshandler}
            disabledButtons={this.state.disabledButtons}
            serverResponse={this.state.serverResponse}
          />
          {console.log("App.state.disabledButtons: ", this.state.disabledButtons)}
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
