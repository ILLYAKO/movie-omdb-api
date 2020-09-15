import React, { Component } from "react";

class MovieNominations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickHandler = (index) => {
    this.props.movieRemoveNominhandler(index);
  };

  render() {
    return (
      <div className="column nomination">
        <h2>Nominations</h2>
        {this.props.isFiveNominants && (
          <div className="five nominates">
            <h3>Thank you for your choice the 5 Nominates!</h3>
          </div>
        )}
        {this.props.movieNominants.map((movie, index) => (
          <li key={index}>
            <div className="movie-img" style={{backgroundImage:`url(${movie.Poster})`}}>
            </div>
            <p className="movie-dscr">
              {movie.Title} ({movie.Year}) Nominate
            </p>
            <button
              onClick={() => {
                this.clickHandler(movie.imdbID);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </div>
    );
  }
}

export default MovieNominations;
