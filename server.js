const express = require("express");
var https = require("https");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors);
app.use("/", (req, res) => {
    res.send("hello heroku test");
});

// route our app

app.use(function (err, req, res, next) {
    // if (!err.code) {
    //     err.message = "server error";
    // }
    res.status(err.code || 500).send(`${err.code || 500} | ${err.message}`);
});

app.listen(port, function () {
    console.log("app started");
});
