const fs = require('fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado "${base}" no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor del limite "${limite}" no es un numero`)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    })
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor de la base "${base}" no es un numero.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor del limite "${limite}" no es un numero`)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`
        }


        resolve(data);

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}