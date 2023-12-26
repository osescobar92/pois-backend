const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Ruta pois');
});

router.get('/:category_id', (req, res) => {
    res.send('Ruta pois/category_id:', req.params);
});

module.exports = router;
