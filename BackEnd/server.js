// Add EXPRESS
const express = require("express");
// Assign body-parser to variable
const bodyParser = require("body-parser");
// Set app to run EXPRESS
const app = express();
// Declare PORT number for rerver to run on (separate from FrontEnd)
const port = 4000;
// Include Mongoose
const mongoose = require("mongoose");

// Add CORS
const cors = require("cors");
// Set app to use CORS
app.use(cors());
// Set up HEADERS to be used by CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Mongoose connection
// Create varable that holds connection string MongoDB Atlas
const connectionString =
  "mongodb+srv://Edgars_DB_Manager:admin@cluster0.ytmtt.mongodb.net/movies?retryWrites=true&w=majority";
// Create a connection, pass in connection string
mongoose.connect(connectionString, { useNewUrlParser: true });

// Define Mongo Schema
const Schema = mongoose.Schema;
const movieSchema = new Schema({
  title: String,
  year: String,
  poster: String,
});

// Define new model in DB
const MovieModel = mongoose.model("movie", movieSchema);

// Set URL where to request data from
app.get("/api/movies", (req, res) => {
  // Set const with data Array with Objects inside
  /*   const mymovies = [
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Captain America: Civil War",
      Year: "2016",
      imdbID: "tt3498820",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
    },
  ];
 */

  MovieModel.find((err, data) => {
    res.json(data);
    if (err) {
      console.log("Error requesting DATA!!!!!!");
    }
  });

  // Pass object that contains data with status code (200) in JSON format
  /*   res.status(200).json({
    // Data to be passed to Front End
    message: "All OK: ",
    movies: mymovies,
  }); */
});

// Listen for GET to search form entries in DB
app.get("/api/movies/:id", (req, res) => {
  console.log("Data requested with id : " + req.params.id);
  // Checks DB with requested ID
  MovieModel.findById(req.params.id, (err, data) => {
    // Send back data
    res.json(data);
    // Check if there are any errrs and display them
    if (err) {
      console.log("No movies found....check your passed params!!!!");
    }
  });
});

//Listen to POST request
app.post("/api/movies", (req, res) => {
  // Log data passed to server
  console.log("New movie received");
  console.log(req.body.title);
  console.log(req.body.year);
  console.log(req.body.poster);

  MovieModel.create({
    title: req.body.title,
    year: req.body.year,
    poster: req.body.poster,
  });

  // Prevents duplication of entries to DB
  res.send("Item Added");
});

// Set listen method for Debugging in console
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
