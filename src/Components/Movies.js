import React from "react";
// Import Movie Items class
import { MovieItem } from "./MovieItem";

export class Movies extends React.Component {
  // Render method
  render() {
    // Return props and loop over each item with .map() function
    return this.props.movies.map((element, index) => {
      // Create element for every item in .map()
      // Add key to every element returned and add key prop(index)
      // Index is used as a counter
      return <MovieItem movie={element} key={index}></MovieItem>;
    });
  }
}
