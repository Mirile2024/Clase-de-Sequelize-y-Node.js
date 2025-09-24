const express = require('express');
const app = express();
process.loadEnvFile();
const port = process.env.PORT || 3000;
const sequelize = require('./src/conectionn/conectionn');
const empleados = require('./src/model/empleados');

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

// app.get('/empleados', (req, res) => {
//     empleados.findAll().then(data => {
//         res.send(data);
//     });
// });
 
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

