import {heroes} from './data/heroes'

export const getHeroeById = (id) => {
   return heroes.find(heroe=>heroe.id===id)
}



export const getHeroeByOwner = (owner) => {
   return heroes.filter(heroe=>heroe.owner===owner)
}







