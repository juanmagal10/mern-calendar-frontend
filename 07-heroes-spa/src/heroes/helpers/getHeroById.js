import {heroes} from '../heroesData/heroes'

export const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
}