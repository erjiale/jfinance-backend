const express = require("express");
const app = express();

// Middlewares
app.get('/', (req, res) => {
    res.status(200);
    res.send("Welcome to jfinance!~");
})

const port = 4000;
const server = app.listen(port);


console.log(`Listening on port ${port}...`)