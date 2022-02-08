const express = require("express");
const router = express.Router();

const baseController = require("../controller/base.controller");
router.get("/", baseController.getHomePage);

module.exports = router;
