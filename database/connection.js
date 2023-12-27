var pgp = require('pg-promise')();
var connectionString = 'postgres://fullstack:desafio-2020@desafio-full-stack.cdr9wf5llq1m.us-east-1.rds.amazonaws.com:5432/georesearch';
var db = pgp(connectionString);

//query functions

//Obtener todos los puntos
async function getAllPois() {
    try {
        var pois = await db.any('select * from pois');
        return { pois };
    } catch(error) {
        return {
            error
        }
    }
}
//Filtrar por categoría
async function getPoisByCategoryId(categoryId) {
    try {
        var pois = await db.any('select * from pois where category_id = $1', categoryId)
        return { pois };
    } catch(error) {
        return {
            error
        }
    }
}

module.exports = {
    getAllPois,
    getPoisByCategoryId
}

