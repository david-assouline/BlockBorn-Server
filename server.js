const express = require('express');
const { getLeaderboardData } = require('./controllers/apiController');
const axios = require('axios').default;
const app = express()
require('dotenv').config();

app.get("/api", (req, res) => {
    getLeaderboardData(req, res);
})

app.listen(5000, () => { console.log("Server started on port 5000") })