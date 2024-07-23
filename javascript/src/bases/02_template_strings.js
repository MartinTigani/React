

const nombre ='Martin';
const apellido='Tigani';

const nombreCompleto=nombre+ ' '+ apellido; // concatenacion

const nombreCompleto2=`${nombre} ${apellido}`;  //segunda forma de concatenar con las comillas raras

//con las comillas raras respeta hasta los salto e lineas y hace los calculos y los arroja como string
const nombreCompleto3=`         
${nombre}
${apellido}
${1 + 1}
`
console.log(nombreCompleto);
console.log(nombreCompleto2);
console.log(nombreCompleto3);

function getSaludo(nombre){     //una funcion
    return 'Hola ' + nombre;
}

console.log( `Este es el texto: ${ getSaludo(nombre) } `);  // con las comillas raras se puede hasta poner el nombre de una funcion y lo toma tmb