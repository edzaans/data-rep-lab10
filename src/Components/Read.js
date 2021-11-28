//Import React
import React from "react";
// Import Movies Component
import { Movies } from "./Movies";
// Import axios to use http requests
import axios from "axios";

export class Read extends React.Component {
  // Class Constructor , add reload data
  constructor() {
    super();
    this.reloadData = this.reloadData.bind(this);
  }

  reloadData() {
    axios
      .get("http://localhost:4000/api/movies")
      .then((res) => {
        this.setState({ movies: res.data });
        console.log(res.data);
      })
      .then(() => {
        this.setState({ test: "Data came back OK!!!" });
        console.log(this.state.test);
      })
      .catch((err) => {
        console.log("Oh ohh, error in request", err);
      });
  }

  // State OBJECT that contains information
  state = {
    // Array of objects and other props
    movies: [],
    test: "",
  };

  // Use componentDidMount() as a constructor for Async
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/movies")
      // If Promise resolved run this...
      .then((res) => {
        // Update state with resolved promise data
        this.setState({ movies: res.data });
        // Test if data came back from API
        console.log(res.data);
      })
      // Use it to TEST if state got updated
      .then(() => {
        this.setState({ test: "Data came back OK!!!" });
        console.log(this.state.test);
      })
      // Catch an error if Promise rejected
      .catch((err) => {
        // Log rejection error for testing
        console.log("Oh ohh, error in request", err);
      });
  }

  // Render method
  render() {
    // Return method to return what has to be rendered
    return (
      <div>
        {/* Pass data downstream to MOVIES */}
        <Movies
          movies={this.state.movies}
          reloadData={this.reloadData}
        ></Movies>
      </div>
    );
  }
}
