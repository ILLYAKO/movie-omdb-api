import React, { Component } from "react";
import Pagination from "./Pagination";

class MovieResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      currentPage: 0,
      totalPages: 0,
      resultPerPage: 10,
      disabledButtons: [],
      apikey: "7535d36f",
      basicUrl: "https://www.omdbapi.com/?apikey=",
    };
  }

  currentPageHandler = (number) => {
    this.setState({ currentPage: number }, () => {
      this.fetchReqest();
    });
  };

  clickHandler = (movie) => {
    this.props.movieNominationshandler(movie);
    this.setState({ disabledButtons: this.props.disabledButtons });
  };

  omdbUrl = () => {
    return this.state.basicUrl
      .concat(this.state.apikey)
      .concat("&type=movie&s=")
      .concat(this.props.movieName)
      .concat("&page=")
      .concat(this.state.currentPage + 1);
  };

  fetchReqest = () => {
    fetch(this.omdbUrl(), [])
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.Response.toLowerCase() === "true") {
            this.setState({ movieList: result.Search });
            this.props.serverResponseHandler(result);
            this.setState({
              totalPages: Math.ceil(
                this.props.serverResponse.totalResults /
                  this.state.resultPerPage
              ),
            });
          } else {
            this.setState({ movieList: [] });
            this.setState({ currentPage: 0 });
            this.setState({ totalPages: 0 });
            this.props.serverResponseHandler(result);
          }
        },
        (error) => {
          this.setState({ error });
        }
      );
  };

  componentDidUpdate(prevProps) {
    if (this.props.movieName !== prevProps.movieName) {
      this.fetchReqest();
    }
  }

  render() {
    return (
      <div className="column result">
        {this.props.movieName ? (
          <h2>Results for "{this.props.movieName}"</h2>
        ) : (
          <h2>Result</h2>
        )}
        <div className="result list">
          <ul>
            {this.state.movieList.map((movie, index) => (
              <li key={index}>
               <div className="movie-img" style={{backgroundImage:`url(${movie.Poster})`}}>
                  {/* <img src={movie.Poster} alt={movie.Title}></img> */}
                </div>
                <p className="movie-dscr">
                  {movie.Title} ({movie.Year})
                </p>
                <button
                  onClick={() => {
                    this.clickHandler(movie);
                  }}
                  disabled={this.props.disabledButtons.includes(movie.imdbID)}
                >
                  Nominate
                </button>
              </li>
            ))}
          </ul>
        </div>
        {this.state.totalPages !== 0 && (
          <Pagination
            currentPage={this.state.currentPage}
            currentPageHandler={this.currentPageHandler}
            totalPages={this.state.totalPages}
          />
        )}
      </div>
    );
  }
}

export default MovieResult;
