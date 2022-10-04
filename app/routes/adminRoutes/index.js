var express = require("express");
var dashboardController = require("../../controller/adminController/dashboardController");
var router = express.Router();

router.route("/").get(dashboardController.index);

module.exports = router;
