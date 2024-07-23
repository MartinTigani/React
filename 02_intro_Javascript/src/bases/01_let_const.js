
console.log('Hola Mundo!!');

//Variables y constantes

const nombre='Martin';
const apellido='Tigani';

let valorDado=5;
valorDado=4;
console.log(nombre, apellido, valorDado);

if(true){
    let valorDado=10;                       // por mas q esta variable yaexita afuera me deja pisarla adentro de este scope
    const nombre="Sebastian";

    console.log(nombre, apellido, valorDado);// imprime sebastian y 10 porque esas variables dentro del scopedel if pisan alas de afuera
}
console.log(nombre, apellido, valorDado);//estoy fuera del scope del if asi q me imprime el nombre y dado de afuera del if