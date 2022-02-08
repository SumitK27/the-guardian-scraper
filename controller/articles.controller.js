const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://www.theguardian.com/uk";

function fetchArticles(req, res) {
    axios(url)
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);
            const articles = [];
            $(".fc-item__container", html).each(function () {
                let title = $(this)
                    .find(".fc-item__title")
                    .text()
                    .trim()
                    .split(0, 150);
                let url = $(this).find("a").attr("href");
                let description = $(this)
                    .find("a")
                    .text()
                    .replace(title, "")
                    .substring(0, 250);
                let no_of_images = $(this)
                    .find(".fc-item__media-wrapper")
                    .find("picture")
                    .find("source")?.length;
                let image =
                    $(this).find(".responsive-img").attr("src") ||
                    "./no-preview.jpg";

                articles.push({
                    title,
                    url,
                    description,
                    no_of_images,
                    image,
                });
            });
            res.json(articles);
        })
        .catch((err) => console.log(err));
}

module.exports = {
    fetchArticles,
};
