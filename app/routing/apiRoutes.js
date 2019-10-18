var friends = require('../data/friends')

module.exports = function (app) {
    // Displays all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var { name: userName, photo: userPhoto, scores } = req.body;
        // var userScores = [];
        // for(var i = 0; i < scores.length; i++){
        //     userScores.push(parseInt(scores[i]))
        // }
        var userScores = scores.map(function (score) {
            return parseInt(score)
        })

        var bestMatch = {
            name: '',
            photo: '',
            friendDiff: Infinity
        };

        for (var i = 0; i < friends.length; i++) {
            var totalDiff = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                var diff = userScores[j] - friends[i].scores[j];
                diff = Math.abs(diff);
                totalDiff += diff;
            }
            if (totalDiff < bestMatch.friendDiff) {
                bestMatch.friendDiff = totalDiff;
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
            }
        }

        friends.push({ name, photo, scores: userScores });
        res.json(bestMatch)
    })
}