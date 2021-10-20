import React from "react";

// Create CREATE Component and export it
export class Create extends React.Component {
  constructor() {
    super();

    // Bind all events
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangePoster = this.onChangePoster.bind(this);

    this.state = {
      Title: "",
      Year: "",
      Poster: "",
    };
  }

  onSubmit(el) {
    el.preventDefault();
    /* alert(`Movie added : ${this.state.Title}`); */
    alert(
      `Movie added : ${this.state.Title} - ${this.state.Year} - ${this.state.Poster}`
    );
  }

  onChangeTitle(el) {
    // Sets state Title value to target(input) value
    this.setState({ Title: el.target.value });
  }

  onChangeYear(el) {
    this.setState({ Year: el.target.value });
  }

  onChangePoster(el) {
    this.setState({ Poster: el.target.value });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <div className="formGroup">
            <label htmlFor="title">Add Movie Title:</label>
            <input
              type="text"
              name="title"
              id=""
              className="formControl"
              value={this.state.Title}
              onChange={this.onChangeTitle}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="year">Add Movie Year:</label>
            <input
              type="text"
              name="year"
              id=""
              className="formControl"
              value={this.state.Year}
              onChange={this.onChangeYear}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="poster">Add Movie Poster:</label>
            <textarea
              className="formControl"
              value={this.state.Poster}
              onChange={this.onChangePoster}
              name="poster"
              id=""
              cols="30"
              rows="10"
              type="text"
            ></textarea>
          </div>

          <div className="formGroup">
            <input
              type="submit"
              value="Add Movie"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
