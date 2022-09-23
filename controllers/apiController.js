const axios = require("axios")

module.exports = {
    getLeaderboardData: (req, res) => {
        axios.get(process.env.API_ENDPOINT, {
            params: {
                league: req.query.league,
                week: req.query.week
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "x-api-key": process.env.API_KEY
            }
        }).then(response => {
            res.send(response.data)
        }).catch(err => {
            console.error(err)
        })
    }
}
