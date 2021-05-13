import React, { Component } from "react";

class Form extends Component {
  state = {
    movieName: "",
    isInputCorrect: false,
  };

  formChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  formSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onSearcMovieName(this.state.movieName);
  };

  componentDidMount() {
    this.setState({ isInputCorrect: true });
  }

  render() {
    return (
      <form onSubmit={this.formSubmitHandler}>
        <label>Movie Title:</label>
        <input
          type="text"
          name="movieName"
          onChange={this.formChangeHandler}
          placeholder="Movie name..."
        />
        <input type="submit" value="Search" />
        {this.props.serverResponse.Response === "False" ||
        !this.state.isInputCorrect ? (
          <div>
            <p>OMDB Response: {this.props.serverResponse.Error} Try againe!</p>
          </div>
        ) : null}
      </form>
    );
  }
}

export default Form;
