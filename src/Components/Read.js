import React from "react";
import { Movies } from "./Movies";
import axios from "axios";

export class Read extends React.Component {
  // State OBJECT that contains information
  state = {
    // Array of objects
    movies: [],
    test: "",
  };

  componentDidMount() {
    axios
      .get("https://jsonblob.com/api/jsonblob/894944504570986496")
      .then((res) => {
        this.setState({ movies: res.data.movies });
      })
      // Use it to test if state got updated
      .then(() => {
        this.setState({ test: "Data came back OK!!!" });
        console.log(this.state.test);
      })
      .catch((err) => {
        console.log("Oh ohh, error in request", err);
      });
  }

  // Render method
  render() {
    // Return method to return what has to be rendered
    return (
      <div>
        <h1>This is Read Component</h1>
        <Movies movies={this.state.movies}></Movies>
      </div>
    );
  }
}
