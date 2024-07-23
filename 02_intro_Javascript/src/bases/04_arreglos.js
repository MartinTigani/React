

//Arreglos Js

const arreglo= new Array(100);      // solo conviene crear los arreglos asi cuando quiero crear un tamaño determinado aunq lo puedo expandir con push
arreglo.push(1);                    //añade elementos

const arreglo2= [];                 //creamos un arreglo vacio
arreglo2.push(1);                   // no se recomienda usar push porq modifica el arreglo
arreglo2.push(2);
arreglo2.push(3);
arreglo2.push(4); 

const arreglo3=[1,2,3,4];           //creamos un arreglo con los valores 1,2,3,4
let arreglo4=arreglo3;              //pasa lo mismo q enobjetos lo q le pasa es la referencia
arreglo4.push(5);                   //al agregar el 5 en el arreglo 4 se agrega tambien en el arreglo3 porq son la misma referencia

let arreglo5= [...arreglo2, 5,6];   // distinto es aca, aca si se hace una copia y se agrega  el elemento 5 y 6 en este arreglo

let arreglo6= arreglo5.map( function(numero){     //esto se le llama howart, es una funcion q se ejecuta dentro de este metodo ejecutandose por cada uno de los elementos que esten dentrode este arreglo5, recordar q esto mecrea un nuevo arreglo asi q si cambio el arreglo6, el arreglo 5 no se modifica
    return numero*2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);
console.log(arreglo5);
console.log(arreglo6);