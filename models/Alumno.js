const mongoose = require('mongoose');

const AlumnoSchema = mongoose.Schema({
    nombres:{type:String, required:true},
    apellidos:{type:String, required:true},
    edad:{type:Number, required:true},
    genero:{type:String, required:true},
    promedio_pond:{type:Number, required:true},
    fechaCreacion:{type:Date, default:Date.now}
    
});

module.exports = mongoose.model('Alumno', AlumnoSchema);
