const express = require ('express');
const app = express();
const routes = require('./routes');


app.use(express.json());
routes.use(routes)
/**
 * Get, post, put, delete 
 * Query Params > Params nomeados enviados após "?" (Filtros, paginação)
 * Route Params > Params utilizados para identificar recursos
 */

app.listen(3333);