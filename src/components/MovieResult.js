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
      disabledButtons:[],
      
      apikey: "7535d36f",
      basicUrl: "http://www.omdbapi.com/?apikey=",
    };
  }

  currentPageHandler = (number) => {
    this.setState({ currentPage: number }, () => {
      this.fetchReqest();
    });
  };

  clickHandler = (movie) => {
    this.props.movieNominationshandler(movie);
    this.setState({disabledButtons:this.props.disabledButtons})  
    // if (this.state.disabledButtons.length < 5) {
    //   this.setState({
    //     disabledButtons: [...this.props.disabledButtons, movie.imdbID],//////
    //   });
    // }
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
        <h1>
          Result for {this.props.movieName}{" "}
          {this.props.serverResponse.totalResults}
        </h1>
        <div className="result list">
        {console.log("MovieResult.state.disabledButtons: ", this.state.disabledButtons)}
          {this.state.movieList.map((movie, index) => (
            <li key={index}>
              {movie.Title} ({movie.Year}) {movie.imdbID}
              <button
                onClick={() => {
                  this.clickHandler(movie);
                }}
                disabled={this.props.disabledButtons.includes(movie.imdbID)} /////
              >
                Nominate
              </button>
            </li>
          ))}
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
