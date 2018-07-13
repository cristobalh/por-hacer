const completado={
			  alias: 'c',
			  desc:"Marca la tarea como completada"

				 };
const descripcion={
			demand: true,
			alias: 'd',
			desc:"Descripción de la tarea por hacer"
			};
const opts={descripcion,
			completado
		
			}
const opts2={
	descripcion
			}

const argv = require('yargs')
			.command('crear','Crear un elemento por hacer',opts)
			.command('actualizar','Actualiza el estado completado d euna tarea',opts)
			.command('listar','Lista las tareas por hacer')
			.command('borrar','Elimina una tarea por su descripción',opts2)
			.help()
			.argv;

module.exports={
	argv
};