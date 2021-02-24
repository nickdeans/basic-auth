'use strict';

// 3rd Party Resources
const express = require('express');

// Prepare the express app
const app = express();

// Required routes
const authenticationRouter = require('./auth/router.js');

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.use(authenticationRouter);

module.exports = {
    app: app,
    start: (port) => {
        app.listen(port, () => console.log('App s listening on port :: ' + port))
    }
}