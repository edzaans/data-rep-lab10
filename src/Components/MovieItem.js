import React from "react";
// Import Card component from BootStrap
import { Card, Button } from "react-bootstrap";
// Import React link
import { Link } from "react-router-dom";

// Import Axios
import Axios from "axios";

export class MovieItem extends React.Component {
  constructor() {
    super();
    // Bind method to THIS
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  // Create a delete method and add to onClick
  deleteMovie() {
    console.log("Deleted: " + this.props.movie._id);

    // Create a DELETE call with Axios that takes in current item ID
    Axios.delete("http://localhost:4000/api/movies/" + this.props.movie._id)
      .then(() => {
        // Pass props to realod data using PROPS
        this.props.reloadData();
      })
      // Catch any errors and display for debug
      .catch((err) => {
        throw err;
      });
  }

  // Render method
  render() {
    // Return Card component
    return (
      // Wrap in DIV and add some BootStrap position classes ( Flex )
      <div className="d-flex justify-content-center">
        <Card style={{ width: "18rem" }} className="my-3">
          <Card.Body>
            {/* Add title that was created using .map() for each element */}
            <Card.Title>{this.props.movie.title}</Card.Title>
            {/* Add Year that was created using .map() for each element */}
            <Card.Text>{this.props.movie.year}</Card.Text>
          </Card.Body>
          {/* Add Poster that was created using .map() for each element */}
          <Card.Img variant="top" src={this.props.movie.poster} />
          <Link
            to={"/edit/" + this.props.movie._id}
            className="btn btn-primary"
          >
            Edit
          </Link>
          <Button className="btn btn-danger" onClick={this.deleteMovie}>
            Delete
          </Button>
        </Card>
      </div>
    );
  }
}
