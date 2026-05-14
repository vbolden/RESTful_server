// DEPENDENCIES
const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;
const apiKey = process.env.OMDB_API_KEY;

// ROUTER IMPORT
const movieRouter = require('./routes/movieRoutes.js');

// ROUTES
// TEST ROUTE
app.get("/", (req, res) => {
    res.send("Testing...");
});

// USE MOVIE ROUTER
app.use("/api", movieRouter);

// PORT
app.listen(PORT, () => {
    console.log(`Running on PORT: ${PORT}`);
});