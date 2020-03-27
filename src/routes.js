// import express from node_modules
const express = require ('express');

// Disengage Router module from express
const routes = express.Router();

routes.post('/ongs', (request, response) => {
    const rbody = request.body;

    console.log(rbody);

    return response.json({
        'Event log': 'Objeto criado'
    });
})

module.exports = routes;