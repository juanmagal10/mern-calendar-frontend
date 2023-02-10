import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getheroById debe retornar un heroe por ID', () => {
      
        const id = 1;
        
        const hero = getHeroeById(id);

        expect(hero).toEqual({id:1, name:'Batman', owner:'DC'})
        
    })
    
    test('getheroById debe retornar un undefined si el id no existe', () => {
      
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    })
    
    //tarea
    test('getHeroesByOwner debe retornar los hereos de dc', () => {
        const heroes = getHeroesByOwner('DC')
        
        
        expect(heroes).toEqual(heroes.filter((heroe)=>heroe.owner==='DC'))
        
        expect(heroes.length).toBe(3)
      
    })

    test('getHeroesByOwner debe retornar los heroes de marvel', () => {
        const heroes = getHeroesByOwner('Marvel')
        expect(heroes).toEqual(heroes.filter((heroe)=>heroe.owner==='Marvel'))
        
        expect(heroes.length).toBe(2)



    })
    
    

  
})
