const express = require("express");
const router = express.Router();
const articlesController = require("../controller/articles.controller");

router.get("/", articlesController.fetchArticles);

module.exports = router;
