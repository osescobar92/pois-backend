var pgp = require('pg-promise')();
var connectionString = 'postgres://fullstack:desafio-2020@desafio-full-stack.cdr9wf5llq1m.us-east-1.rds.amazonaws.com:5432/georesearch';
var db = pgp(connectionString);

//query functions

//Obtener todos los puntos
async function getAllPois() {
    var data = await db.any('select * from pois');
    return data;
}
//Filtrar por categoría
async function getPoisByCategoryId(categoryId) {
    var data = await db.any('select * from pois where category_id = $1', categoryId)
    return data;
}

module.exports = {
    getAllPois,
    getPoisByCategoryId
}

