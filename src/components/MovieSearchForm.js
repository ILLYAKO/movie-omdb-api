import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
    };
  }

  myChangeHandler = (event) => {
    this.setState({ movieName: event.target.value });
  };

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.props.onSearcMovieName(this.state.movieName);
  };

  render() {
    return (
      <form onSubmit={this.mySubmitHandler} >
        <label>
          Movie Title: 
        </label>
        <input type="text" name="movieName" onChange={this.myChangeHandler} placeholder="Movie name..." />
        <input type="submit" value="Search" />
        {this.props.serverResponse.Response === "False" && (
          <div>
            <p>OMDB Response: {this.props.serverResponse.Error}</p>
            <p>Try againe!</p>
          </div>
        )}
      </form>
    );
  }
}

export default Form;
