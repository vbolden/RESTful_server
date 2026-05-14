const express = require("express");
const axios = require("axios");
const movieRouter = express.Router();
const searchMovies = require("../controllers/movieController.js")

// ROUTES
movieRouter.get("/api/movies/search", searchMovies);

// movieRouter.get("/api/movies/:id");

module.exports = movieRouter;