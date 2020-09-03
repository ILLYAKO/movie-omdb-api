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

  omdbUrl = () => {
    return this.state.basicUrl
      .concat(this.state.apikey)
      .concat("&s=")
      .concat(this.props.movieName);
  };

  scaping = () => {
    fetch(this.omdbUrl())
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result.Search", result.Search);
          //this.setState({ movieList: result.Search });
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
  };

  render() {
    return (
      <div className="Result">
        <h1>Result for {this.props.movieName}</h1>
        {this.props.movieName && this.scaping()}
      </div>
    );
  }
}

export default MovieResult;
