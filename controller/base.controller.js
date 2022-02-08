const path = require("path");

function getHomePage(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
}

module.exports = {
    getHomePage,
};
