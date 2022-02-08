const articlesController = require("../controller/articles.controller");

async function getHomePage(req, res) {
    const articles = await articlesController.getArticles();
    res.render("index", { articles: articles });
}

module.exports = {
    getHomePage,
};
