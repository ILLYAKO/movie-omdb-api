import React, { Component } from "react";

class MovieNominations extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  
  clickHandler = (index) => {
    this.props.movieRemoveNominhandler(index);
  };
  
  render() {
    return (
      <div className="column nomination">
        <h1>Nominations</h1>
        <div className = "Five Nominates" style={{ background: "yellow" }}>
        {this.props.isFiveNominants && <h3>Thank you for your choice the 5 Nominates!</h3>}
        </div>

        {this.props.movieNominants.map((movie, index) => (
          <li key={index}>
            {movie.Title} ({movie.Year}) Nominate
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
