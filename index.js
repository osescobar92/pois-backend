const express = require('express')
const app = express()

const routes = require('./routes/routes');

app.get('/', (req, res) => {
    res.send('Bienvenido a la prueba Puntos de Interés para postular a la empresa XBrein');
});
app.use('/pois', routes);

app.use(function (req, res) {
    res.status(404).send('Sorry cant find the page!')
})

app.use(function (err, req, res) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000, () => {
    console.log('La app está escuchando en el puerto 3000')
})