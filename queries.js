const db = require("./db/database-connection");

module.exports = {
    list(){
        return db('coffee')
    },
    read(id){
        return db('coffee')
        .where('id', id)
    },
    create(coffee){
        return db('coffee')
        .insert(coffee)
        .returning('*')
        .then(record => record[0])
    },
    update(id, coffee){
        return db('coffee')
        .update(coffee)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    delete(id){
        return db('coffee')
        .delete()
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    }
};
