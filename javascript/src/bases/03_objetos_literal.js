

const persona ={                    //creacion de un objeto
    nombre:'Tomy',
    apellido:'Stark',
    edad: 45,
    direccion: {                    // se creo un objeto dentro de un objeto
        provincia: 'Buenos Aires',
        localidad: 'El palomar',
        codPostal: 1684,
        piso: 1,
        latitud: 16.5685,           // los decimales van con punto (.)
        longitud: 58.256        
    }
}

//console.table(persona);       // lo muestra en forma de tabla
const persona2=persona;         // (no debe hacerse) aca no se esta copiando el valor de el objeto persona enpersona2, lo q estamos copiando es la referencia, si se cambia persona se va a cambiar en persona2
const persona3={ ...persona };
persona2.nombre='Felipe';
persona3.nombre='Fabian';

console.log(persona);
console.log(persona2);
console.log(persona3);