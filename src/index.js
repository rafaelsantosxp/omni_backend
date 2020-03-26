// import express from node_modules
const express = require ('express');
// import routes from ./routes
const routes = require ('./routes');
// Create app with express module functions
const omniapp = express();
// App understand .json posts
omniapp.use(express.json());

// Use imported routes
omniapp.use(routes);

// App listen on port 3333
omniapp.listen(3333);