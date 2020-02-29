// const argv = require('yargs').argv;
const yargs = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');


const comando = yargs._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(yargs.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        const listado = porHacer.getListado(yargs.completado);
        if (listado) {
            for (let tarea of listado) {
                console.log("==========POR HACER===========".green);
                console.log(tarea.descripcion);
                console.log('Estado tarea: ', tarea.completado);
                console.log("==============================".green);
            }
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(yargs.descripcion, yargs.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(yargs.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando desconocido');
        break;
}