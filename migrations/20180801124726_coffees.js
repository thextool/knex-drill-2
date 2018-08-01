
exports.up = function(knex, Promise) {
    return knex.schema.createTable('coffee', (table) => {
        table.increments()
        table.text('name').notNullable()
        table.text('roaster').notNullable()
        table.integer('aroma').notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('coffee')
};
