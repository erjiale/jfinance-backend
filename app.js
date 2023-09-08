const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Welcome to jfinance!~</h1>");
});

const port = 4000;
const server = app.listen(port);

console.log(`Listening on port ${port}...`)