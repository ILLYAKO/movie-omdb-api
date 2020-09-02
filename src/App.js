import React, { Component } from "react";
import MovieSearchForm from "./components/MovieSearchForm"
import MovieResult from "./components/MovieResult"
import './App.css';
import MovieNominations from "./components/MovieNominations";

class App extends Component {
  render() { return (
    <div className="App">
      <h1>The Shoppies</h1>
      <MovieSearchForm/>
      <MovieResult/>
      <MovieNominations/>

    </div>
  );
}}

export default App;
