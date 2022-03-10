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

const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log('server on port 4000');
})