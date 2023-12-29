require('dotenv').config();
var pgp = require('pg-promise')();

var db = pgp({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
});

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

