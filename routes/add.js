var data = require("../data.json");

exports.addFriend = function(req, res) {  

	var newFriend = {
		"Name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://lorempixel.com/400/400/people"
	}

	data["friends"].push(newFriend);
	res.render('index', data);

	// Your code goes here
 }