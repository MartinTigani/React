
//desestructuracion de arreglos

const personajes=['Goku','Vegeta', 'Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [p1] = personajes;
const[, p2]=personajes;
const[, , p3]=personajes;   //cuando me quiero referenciar al elemento 3 del array dejo 2 comas primero

console.log(p1);
console.log(p2);
console.log(p3);

const retornArreglo = () =>{
    return ['ABC', 12];
}

const [letras, numeros] = retornArreglo();
console.log(letras, numeros);

//tarea
//1. el primer valor se llamara nombre
//2. el segundo valor se llamara setNombre
const usestate =(valor)=>{
    return[valor, ()=>{console.log('Hola mundo')}];
}

const [nombre, setNombre] = usestate('Goku');
console.log(nombre);
setNombre(); // hace lo mismo q el arr[1]() pero mas prolijo

//console.log(arr);
//arr[1]();       //aqui imprimira 'Hola mundo'
