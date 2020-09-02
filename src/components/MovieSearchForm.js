import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null,
      errormessage: "",
      movieList: []
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    if (nam === "age") {
      if (val !== "" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({ errormessage: err });
    this.setState({ [nam]: val });
  };

  mySubmitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    console.log("username: ", this.state.username);
    let fetchUrl = `http://www.omdbapi.com/?apikey=7535d36f&s=${this.state.username}`

    //alert("You are submitting " + this.state.username);
    //http://www.omdbapi.com/?t=007&apikey=7535d36f

    fetch(fetchUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
            movieList: result
          });

          console.log('result: ', result)
          console.log('movieList: ', this.state.movieList[0])


        }, 
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
      <form onSubmit={this.mySubmitHandler} style={{ background: "red" }}>
        {/* <h1>
            Hello {this.state.username} {this.state.age}
          </h1> */}
        <p>Movie Title</p>
        <input type="text" name="username" onChange={this.myChangeHandler} />
        {/* <p>Enter your age:</p>
          <input type="text" name="age" onChange={this.myChangeHandler} /> */}
        <input type="submit" />
        {this.state.errormessage}
      </form>
    );
  }
}

export default Form;
