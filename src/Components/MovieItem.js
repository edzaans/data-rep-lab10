import React from "react";
// Import Card component from BootStrap
import { Card } from "react-bootstrap";

export class MovieItem extends React.Component {
  // Render method
  render() {
    // Return Card component
    return (
      // Wrap in DIV and add some BootStrap position classes ( Flex )
      <div className="d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            {/* Add title that was created using .map() for each element */}
            <Card.Title>{this.props.movie.title}</Card.Title>
            {/* Add Year that was created using .map() for each element */}
            <Card.Text>{this.props.movie.year}</Card.Text>
          </Card.Body>
          {/* Add Poster that was created using .map() for each element */}
          <Card.Img variant="top" src={this.props.movie.poster} />
        </Card>
      </div>
    );
  }
}
