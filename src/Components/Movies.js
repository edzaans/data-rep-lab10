import React from "react";
// Import Movie Items class
import { MovieItem } from "./MovieItem";

export class Movies extends React.Component {
  // Render method
  render() {
    // Return props and loop over each item with .map() function
    return this.props.movies.map((element) => {
      // Create element for every item in .map()
      return <MovieItem movie={element}></MovieItem>;
    });
  }
}
