
import{ heroes } from  './data/heroes';

console.log(heroes);


// const getHeroeById = (id)=>{
//     return heroes.find((heroes)=>{
//         if(heroes.id === id){
//             return true;
//         }else{
//             return false;
//         }
         
//     });
// }

//esto es lo mismo q arriba comentado pero abreviado
const getHeroeById = (id)=>
    heroes.find((heroes)=> heroes.id === id);


console.log(getHeroeById(4));


// const getHeroesByOwner = (owner) => heroes.find((heroes) => heroes.id ===id);

// console.log(getHeroesByOwner('DC'));