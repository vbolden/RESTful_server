const express = require("express");
const movieRouter = express.Router();
const { searchMovies, getMovieDetails } = require("../controllers/movieController.js");

// ROUTES
movieRouter.get("/search", searchMovies);

movieRouter.get("/movies/:id", getMovieDetails);

module.exports = movieRouter;