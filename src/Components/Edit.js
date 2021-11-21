// Import React
import React from "react";
// Import Components to be used from BootStrap library
import { Form, Button, Container } from "react-bootstrap";
// Import axios to communicate with Back End
import axios from "axios";

// Create CREATE Class and export it
export class Edit extends React.Component {
  // Constructor to initialise
  constructor() {
    super();

    // Bind all events
    // Bind Form submission
    this.onSubmit = this.onSubmit.bind(this);
    // Bind Title function
    this.onChangeTitle = this.onChangeTitle.bind(this);
    // Bind Year change
    this.onChangeYear = this.onChangeYear.bind(this);
    // Bind Poster change
    this.onChangePoster = this.onChangePoster.bind(this);

    // Set initial state with props
    this.state = {
      Title: "",
      Year: "",
      Poster: "",
    };
  }

  // Code when Component starts
  componentDidMount() {
    console.log(this.props.match.params.id);

    // Get method to retrieve movie information from server
    axios
      .get("http://localhost:4000/api/movies/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          _id: response.data._id,
          Title: response.data.title,
          Year: response.data.year,
          Poster: response.data.poster,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Function to be run when form is Submitted
  onSubmit(el) {
    // Prevents page reload when form is submitted
    el.preventDefault();
    // Alert code for testing posted values
    alert(
      `Movie added : ${this.state.Title} - ${this.state.Year} - ${this.state.Poster}`
    );
    // Declare Object that is sent with Axios.post method
    const newmovie = {
      title: this.state.Title,
      year: this.state.Year,
      poster: this.state.Poster,
      _id: this.state._id,
    };

    // Create PUT method to update record
    axios
      .put("http://localhost:4000/api/movies/" + this.state._id, newmovie)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log("Data not updated: " + err);
      });

    // Create POST to server
    /*   axios
      .post("http://localhost:4000/api/movies", newmovie)
      // Promise is returned here
      .then((response) => {
        console.log("Data came back from API");
        console.log(response);
      })
      // Catch block
      .catch((err) => {
        console.log("Error in posting data : " + err);
      }); */

    /*  
    ******   FOR TESTING DATA STREAM ONLY ********
    const test = "Data stream works";
    axios
      .post("http://localhost:4000/api/movies", test)
      .then(console.log(test));
      
    ***********************************************
    */
  }

  // Function to be run when Title value submitted
  onChangeTitle(el) {
    // Sets state Title value to target(input) value
    this.setState({ Title: el.target.value });
  }

  // Function to be run when Year value submitted
  onChangeYear(el) {
    // Sets state Year value to target(input) value
    this.setState({ Year: el.target.value });
  }

  // Function to be run when Poster value submitted
  onChangePoster(el) {
    // Sets state Poster value to target(input) value
    this.setState({ Poster: el.target.value });
  }

  // render method of all code to be rendered on screen
  render() {
    // Return value that will be displayed
    return (
      // Wrap all content in a <div> element
      <div className="App">
        {/* Wrap elements in Container for spacing/layout */}
        <Container>
          {/* Working Form with BootStrap styles */}
          <Form onSubmit={this.onSubmit}>
            <Form.Group className="mb-3" controlId="movieTitle">
              <Form.Label>Add Movie Title</Form.Label>
              <Form.Control
                type="text"
                value={this.state.Title}
                onChange={this.onChangeTitle}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="movieYear">
              <Form.Label>Add Movie Year</Form.Label>
              <Form.Control
                type="text"
                value={this.state.Year}
                onChange={this.onChangeYear}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="moviePoster">
              <Form.Label>Add Movie Poster</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="poster"
                value={this.state.Poster}
                onChange={this.onChangePoster}
              />
            </Form.Group>

            <Button variant="primary" type="submit" value="Edit Movie">
              Edit Movie
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
