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
      <form onSubmit={this.mySubmitHandler} style={{ background: "red" }}>
        <label>
          Movie Title
          <input type="text" name="movieName" onChange={this.myChangeHandler} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
