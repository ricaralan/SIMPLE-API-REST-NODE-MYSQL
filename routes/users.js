var express = require('express');
var router = express.Router();
var userModel = require("../database/models/user_model");

/* GET users listing. */
router.get('/', function(req, res) {
	res.render("index");
});

router.get('/getUsers', function(req, res) {
	userModel.getUsers(function (err, users){
		res.send(users);
	});
});

router.post("/createUser/:jsonDatos", function (req, res){
	jsonDatos = JSON.parse(req.params.jsonDatos);
	userModel.createUser(jsonDatos, function (err, results){
		if (err) {
			res.send('respond with a resource ' + err.message);
		}else {
			res.send(results);
		}
	});
});

router.put("/updateUser/:jsonDatos", function (req, res){
	jsonDatos = JSON.parse(req.params.jsonDatos);
	userModel.updateUser(jsonDatos, function (err, results){
		if (err) {
			res.send('respond with a resource ' + err.message);
		}else {
			res.send(results);
		}
	});
});

router.delete("/deleteUser/:user_id", function (req, res){
	userModel.deleteUser(req.params.user_id, function (err, results){
		if (err) {
			res.send('respond with a resource ' + err.message);
		}else {
			res.send(results);
		}
	});
});

module.exports = router;
