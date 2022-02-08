const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

const baseRoute = require("./routes/base.route");
const articlesRoute = require("./routes/articles.route");

app.use(cors());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", baseRoute);
app.use("/articles", articlesRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
