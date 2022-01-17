const path = require("path");
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.static("src"));

const url = "https://www.theguardian.com/uk";

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/articles", (req, res) => {
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
                let description = $(this).find("a").text().substring(0, 250);
                let no_of_images = $(this)
                    .find(".fc-item__media-wrapper")
                    .find("picture")
                    .find("source")?.length;
                let image =
                    $(this).find(".responsive-img").attr("src") ||
                    "http://www.fsxaddons.com/static/img/no-preview.jpg";

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
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
