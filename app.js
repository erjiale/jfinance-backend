const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Welcome to jfinance!~</h1>");
});

const port = 4000;

// Setup Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.get(`/api/todos`, (req, res) => {
    console.log("get all todos!!");
    res.json({
        "id": 1,
        "task": "call dentist",
        "status": "incomplete"
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});