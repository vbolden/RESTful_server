const axios = require('axios');

const searchMovies = async (req, res) => {
    try {
        const title = req.query.title;

        if(!title) {
            return res.status(400).json({"error": "Title query parameter is required"})
        }
        
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while searching for movies.' });
    }
}