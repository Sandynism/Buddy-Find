let friends = require("../data/friends.js")

module.exports = function(app) {

   app.get("/api/friends", function(req, res) {
    return res.json(friends)
  })
  
 
  app.post('/api/friends', function(req, res){

		let bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		}

		let userData 	= req.body
		let userName 	= userData.name
		let userPhoto 	= userData.photo
		let userScores 	= userData.scores

		let totalDifference = 0

		//Loop through all the current possibilities in the database. 
		for  (let i = 0; i < friends.length; i++) {

			console.log("Your best match is " + friends[i].name)
			totalDifference = 0

			//Loop through the friends score.
			for (let j = 0; j < friends[i].scores[j]; j++){

				//Calculate the difference between the scores and sum them into the totalDifference.
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]))

				//If the sum of differences is less then the differences of the current "best match" then reset the bestMatch to be the new friend. 
				if (totalDifference <= bestMatch.friendDifference) {
					bestMatch.name = friends[i].name
					bestMatch.photo = friends[i].photo
					bestMatch.friendDifference = totalDifference
				}
			}
		}

		friends.push(userData)

		res.json(bestMatch)

	})
}
