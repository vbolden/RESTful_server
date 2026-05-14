// DEPENDENCIES
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const apiKey = process.env.OMDB_API_KEY;

// ROUTES
// TEST ROUTE
app.get("/", (req, res) => {
    res.send("Testing...")
})

// PORT
app.listen(PORT, () => {
    console.log(`Running on PORT: ${PORT}`);
})