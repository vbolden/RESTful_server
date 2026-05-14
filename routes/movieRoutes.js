const express = require("express");
const axios = require("axios");
const movieRouter = express.Router();
const { searchMovies, getMovieDetails } = require("../controllers/movieController.js");

// ROUTES
movieRouter.get("/api/movies/search", searchMovies);

movieRouter.get("/api/movies/:id", getMovieDetails);

module.exports = movieRouter;