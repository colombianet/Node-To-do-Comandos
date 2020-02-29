const argv = require('yargs')
    .command('listar', 'Lista todas las tareas o por una condición', {
        descripcion: {
            alias: 'd',
            desc: 'Lista todas las tareas'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('crear', 'Crea un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Actualiza la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Elimina la tarea que coincida con la descripción dada', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Elimina la tarea por hacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}