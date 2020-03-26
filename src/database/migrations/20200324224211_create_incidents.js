exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
//** Cria coluna auto incremental ID */
        table.increments();
//** Cria coluna de valores usados pela tabela*/
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
//** Cria coluna ong_id e referencia a foreign key da tabela ongs coluna ID*/
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');

    });
};
exports.down = function(knex) {
/**Exclui tabela */    
    return knex.schema.dropTable('incidents');
};
  