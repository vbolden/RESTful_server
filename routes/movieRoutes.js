const express = require("express");
const movieRouter = express.Router();
const { searchMovies, getMovieDetails } = require("../controllers/movieController.js");

// ROUTES
movieRouter.get("/api/search", searchMovies);

movieRouter.get("/api/movies/:id", getMovieDetails);

module.exports = movieRouter;