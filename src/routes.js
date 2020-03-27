// Import express from node_modules
const express = require('express');
// Import Crypto from node_modules;
const crypto = require('crypto')
// Import connection from database/connection
const connection = require('./database/connection')

// Disengage Router module from express
const routes = express.Router();

routes.get('/ongs', async(request, response) => {
    const select_ong = await connection('ongs').select('*');
    return response.json(select_ong);
});

routes.post('/ongs', async(request, response) => {
// Pick the request by value
    const { name, email, whatsapp, city, uf } = request.body
// Defines ID generate by crypto randomBytes
    const id = crypto.randomBytes(6).toString('hex')
// Insert into database table 'ongs' 
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })
// Return ID generate by crypto randomBytes
    return response.json({ 
        'Evento' : 'Objeto Criado',
        'ID': id });
})

module.exports = routes;