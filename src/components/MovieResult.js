import React, { Component } from "react";

export class MovieResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      apikey: "7535d36f",
      basicUrl: "http://www.omdbapi.com/?apikey=",
    };
  }

  clickHandler = (movie) => {
    this.props.movieNominationshandler(movie);
  };

  omdbUrl = () => {
    return this.state.basicUrl
      .concat(this.state.apikey)
      .concat("&s=")
      .concat(this.props.movieName);
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.movieName !== prevProps.movieName) {
      // this.fetchData(this.props.userID);
      fetch(this.omdbUrl(), [])
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({ movieList: result.Search });
            console.log("movieList: ", this.state.movieList);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
    }
  }

  render() {
    return (
      <div className="column result">
        <h1>Result for {this.props.movieName}</h1>
        <div className="result list">
          {this.state.movieList.map((movie, index) => (
            <li key={index}>
              {movie.Title} ({movie.Year}){" "}
              <button
                onClick={() => {
                  this.clickHandler(movie);
                }}
              >
                Nominate
              </button>
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default MovieResult;
