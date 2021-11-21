import React from "react";
// Import Card component from BootStrap
import { Card } from "react-bootstrap";
// Import React link
import { Link } from "react-router-dom";

export class MovieItem extends React.Component {
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
        </Card>
      </div>
    );
  }
}
