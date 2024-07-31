
//desestructuracion



const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
    apellido: 'Stark',
    //rango: 'soldado'
}

console.log(persona);//imprime el objeto entero
console.log(persona.nombre);//para imprimir el atributo nombre del objeto persona de forma basica
console.log(persona.edad);
console.log(persona.clave);

const {nombre}= persona;//aca hago una desestructuracion, creo una variable entre llaves con el mismo nombre de un atributo del objeto al que quiero y lo hace
console.log(nombre);

const {nombre: nombre2}=persona;// si ya tengo una variable usandola que se llama nombre, de esta forma puedo crear una vvariable nombre2 de esta forma y lo hace tambien
console.log(nombre2);

// tambien se puede usar la desustriucturacion como parametro, recibe la variable apellido y al saber q cuando llama a la funcion le manda una persona ya puede aplicar la desestructuracion
const retornPersona = ({clave, edad, apellido, rango='capitan'})=>{  // tambien puedo agregar un atributo como en este caso rango igualandolo y lo va a desestructurar, en caso de q cuando construyp arriba el objeto tenga el rango, usa ese rango
    console.log(apellido, rango);

    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 15.254,
            lng: -12.5685
        }
    }
}
retornPersona(persona);

const {nombreClave,anios, latlng:{lat,lng}}= retornPersona( persona); //aplico una desestructuracion, y si tengo un objeto dentro de un objeto y quiero desestructurar sus atributos lo hago comose ve en latlng
console.log(nombreClave, anios);
console.log(lat,lng);

//console.log(avenger);

console.log(persona);// observar que el rango q agregue sino esta en la construccion, cuando quiero imprimir el objeto completo no aparece

// const useContext =({clave, edad, apellido, rango='capitan'})=>{  // tambien puedo agregar un atributo como en este caso rango igualandolo y lo va a desestructurar, en caso de q cuando construyp arriba el objeto tenga el rango, usa ese rango

//     return{
//         nombreClave: clave,
//         anios: edad
//     }
// }
// const avenger2=useContext( persona );
// console.log(avenger2);