// import express from node_modules
const express = require ('express');

// Disengage Router module from express
const routes = express.Router();

routes.post('/users', (request, response) => {
    const rbody = request.body;

    console.log(rbody);

    return response.json({
        evento: 'Semana Omnistack 11',
        aluno: 'Rafael Santos'
    });
})

module.exports = routes;