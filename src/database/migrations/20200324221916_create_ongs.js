exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
//** Cria coluna de valores usados pela tabela*/  
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();      
//** Cria coluna de valores usados pela tabela com no máximo 2 caract.*/
      table.string('uf', 2).notNullable();
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
