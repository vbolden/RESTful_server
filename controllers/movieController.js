const axios = require('axios');
require('dotenv').config();
const apiKey = process.env.OMDB_API_KEY;

const searchMovies = async (req, res) => {
    try {
        const title = req.query.title;

        if (!title) {
            return res.status(400).json({ "Error": "Title query parameter is required" });
        }

        const apiResponse = await axios.get("http://www.omdbapi.com/", {
            params: {
                s: title,
                apiKey: apiKey,
            }
        });

        res.json(apiResponse.data);

    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movie data.' });
    }
};

const getMovieDetails = async (req, res) => {
    try {
        const id = req.query.id;

        if (!id) {
            return res.status(400).json({ "Error": "ID query parameter is required" });
        }

        const apiResponse = await axios.get("http://www.omdbapi.com/", {
            params: {
                i: id,
                apiKey: apiKey,
            }
        });

    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movie data.' });
    }
};

module.exports = { searchMovies, getMovieDetails };