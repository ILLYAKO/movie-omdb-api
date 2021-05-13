import React, { Component } from "react";
import MovieSearchForm from "./components/MovieSearchForm";
import MovieResult from "./components/MovieResult";
import MovieNominations from "./components/MovieNominations";

class App extends Component {
  state = {
    serverResponse: {
      Response: "",
      Error: "",
      Search: [],
      totalResults: "",
    },
    movieName: null,
    movieNominants: [],
    disabledButtons: [],
    isFiveNominants: false,
    isServerResposeTrue: "",
  };

  omdbUrl = () => {
    return this.state.basicUrl
      .concat(this.state.apikey)
      .concat("&type=movie&s=")
      .concat(this.state.movieName)
      .concat("&page=")
      .concat(this.state.currentPage + 1);
  };

  serverResponseHandler = async (serverResponse) => {
    await this.setState({ serverResponse });
    await this.setState({
      isServerResposeTrue: this.state.serverResponse.Response,
    });
  
  };

  movieNamehandler = async (name) => {
    await this.setState({ movieName: name });
  };

  movieNominationshandler = async (movie) => {
    if (this.state.movieNominants.length <= 4) {
      await this.setState({
        movieNominants: [...this.state.movieNominants, movie],
        disabledButtons: [...this.state.disabledButtons, movie.imdbID],
      });
    } else {
      this.setState({ isFiveNominants: true });
    }
    this.state.movieNominants.length <= 4
      ? this.setState({ isFiveNominants: false })
      : this.setState({ isFiveNominants: true });
  };

  movieRemoveNominhandler = (imdbIDNumber) => {
    let arrayM = [...this.state.movieNominants];
    if (imdbIDNumber !== -1) {
      arrayM = arrayM.filter((element) => element.imdbID !== imdbIDNumber);
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
        {this.state.movieName || this.state.movieNominants.length ? (
          <div className="row result nomination">
            <MovieResult
              movieName={this.state.movieName}
              serverResponse={this.state.serverResponse}
              serverResponseHandler={this.serverResponseHandler}
              movieNominationshandler={this.movieNominationshandler}
              disabledButtons={this.state.disabledButtons}
            />
            <MovieNominations
              movieNominants={this.state.movieNominants}
              isFiveNominants={this.state.isFiveNominants}
              movieRemoveNominhandler={this.movieRemoveNominhandler}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
