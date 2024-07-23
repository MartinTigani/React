
//funciones

/*function saludar(nombre){
    return `Hola ${nombre}`;
}*/

const saludar = function( nombre){
    return `Hola ${nombre}`;
}

const saludar2 = ( nombre) =>{      // es la funcion flecha de la misma funcion de arriba
    return `Hola ${nombre}`;
}

const saludar3 = ( nombre) =>`Hola ${nombre}`;       // es la funcion flecha cuando es una sola linea

const getUser = ()=>                    //en este caso como es solo una linea del return se pone parentesis por fuera de las llaves de el objeto a devolver y se saca la palabra return
    ({
        id: 123456,
        userName: 'martin56'
    })


console.log(saludar('Martin'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(getUser());


//Tarea
//1. transformar en funcion flecha
//2. tiene q retornar un objeto implicito
//3. pruebas

// function getUsuarioActivo(nombre){
//     return{
//         id: 'ABC1234',
//         userName: nombre
//     }
// };

const getUsuarioActivo=(nombre)=>
    ({
        id: 'ABC1234',
        userName: nombre
    });

const usuarioActivo =getUsuarioActivo('Martin');
console.log(usuarioActivo);
