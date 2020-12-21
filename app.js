//requireds
const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv; //acedemos a la constante de la clase yargs

const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resp => console.log(`"Tabla del ${argv.base}"\n`.white, resp.red))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.yellow }`)) //archivo.yellow - No es recomendable porque puede existir una propiedad llamada "yellow"
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}