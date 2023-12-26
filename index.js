const express = require('express')
const app = express()

const routes = require('./routes/routes');

app.get('/', (req, res) => {
    res.send('Hello world');
});
app.use('/pois', routes);

app.listen(3000, () => {
    console.log('La app está escuchando en el puerto 3000')
})