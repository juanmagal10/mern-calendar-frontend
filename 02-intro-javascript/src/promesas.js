import {getHeroeById} from './getHeroes'

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
       
//         const heroe = getHeroeById(2)
//         resolve(heroe)
//         reject('no se pudo encontrar el heroe')
//     }, 4000);
// });

// promesa.then((heroe) => {
    
// console.log(heroe)
// })
//     .catch(err => console.log(err))

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
       
        const heroe = getHeroeById(id)
       if(heroe){
           resolve(heroe)
       } else {
           reject('no se a encontrado el heroe')
       }
    }, 4000);
});

}

getHeroeByIdAsync(3)
    .then(console.log)
    .catch(err=>console.log(err))