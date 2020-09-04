import React, { Component } from "react";

export class MovieNominations extends Component {
  render() {
    return (
      <div className="column nomination">
        <h1>Nominations</h1>
        {this.props.movieNominants.map((movie, index) => (
          <li key={index}>
            {movie.Title} ({movie.Year}) Nominate
          </li>
        ))}
      </div>
    );
  }
}

export default MovieNominations;
