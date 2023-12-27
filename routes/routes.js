const express = require('express');
const router = express.Router();

const db = require('../database/connection'); 

router.get('/', async (req, res) => {
    res.status(200)
        .json(await db.getAllPois());
});

router.get('/:category_id', async (req, res) => {
    //el parametro se transforma en int
    var categoryId = req.params.category_id;
    res.status(200)
        .json(await db.getPoisByCategoryId(categoryId));
});

module.exports = router;
