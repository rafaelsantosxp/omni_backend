# omni_backend steps to create this app

Install nodejs / npm

npm init - > to create package.json
npm install express
npm install knex

npm install nodemon -D

/**
 * Get, post, put, delete 
 * Query Params > Params nomeados enviados após "?" (Filtros, paginação)
 * Route Params > Params utilizados para identificar recursos
 */

npx knex init
npx knex migrate:make  create_ongs // Create migrations
npx knex migrate:make  create_incidents // Create migrations

// executa o knex
npx knex migrate:latest



















----------------

// npx create-react-app frontend