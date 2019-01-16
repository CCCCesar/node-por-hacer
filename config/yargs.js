const descripcion={
    demand: true,
    alias:'d',
    desc: 'Descripcion de la tarea por hacer'
};
const completado ={
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}




const argv = require('yargs')
            .command('crear', 'Craer un elemento por hacer',{
                descripcion
            })
            .command('actualizar', 'Actualizar el estado completado de un tarea',{
                descripcion,
                completado
            }).command('borrar','Borrar una de las tareas',{
                descripcion
               
            })
            .help()
            .argv;


module.exports={
    argv
}