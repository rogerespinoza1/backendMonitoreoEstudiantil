const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");
//creamos el servidor
const app = express();

//conectamos a la BD
conectarDB();
app.use(cors());
app.use(express.json());

app.use('/api/alumnos', require('./routes/alumno'));


app.listen(4000, ()=>{
    console.log('server on port 4000');
})