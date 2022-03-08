const Alumno = require("../models/Alumno");
exports.crearAlumno =async (req,res)=>{
    try{
        let alumno;
        alumno = new Alumno(req.body);
        await alumno.save();
        res.send(alumno);

    }catch(error){
        console.log(error);
        res.status(500).json({mensaje:'Error', error:error});
    }
}

exports.obtenerAlumno = async (req,res)=>{
    try{
        const alumnos = await Alumno.find({});
        res.json(alumnos);
    }catch(error){
        console.log(error);
        res.status(500).json({mensaje:'Error', error:error});
    }
}
exports.actualizarAlumno = async (req,res)=>{
    try{
        const {nombres,apellidos,edad,genero,promedio_pond} = req.body;
        let alumno = await Alumno.findById(req.params.id);
        if(!alumno){
            res.status(404).json({mensaje:'No se encontro el alumno'});
        }
        alumno.nombres = nombres;
        alumno.apellidos = apellidos;
        alumno.edad = edad;
        alumno.genero = genero;
        alumno.promedio_pond = promedio_pond;
        alumno = await Alumno.findOneAndUpdate({_id:req.params.id},alumno,{new:true});
        res.json(alumno);
    }catch(error){
        console.log(error);
        res.status(500).json({mensaje:'Error', error:error});
    }
}

exports.obtenerAlumnoPorId = async (req,res)=>{
    try{
        let alumno = await Alumno.findById(req.params.id);
        if(!alumno){
            res.status(404).json({mensaje:'No se encontro el alumno'});
        }
        res.json(alumno);
    }catch(error){
        console.log(error);
        res.status(500).json({mensaje:'Error', error:error});
    }
}
exports.eliminarAlumno = async (req,res)=>{
    try{
        let alumno = await Alumno.findById(req.params.id);
        if(!alumno){
            res.status(404).json({mensaje:'No se encontro el alumno'});
        }
        await Alumno.findOneAndRemove({_id:req.params.id});
        res.json({msg:"Alumno eliminado"});
    }catch(error){
        console.log(error);
        res.status(500).json({mensaje:'Error', error:error});
    }
}