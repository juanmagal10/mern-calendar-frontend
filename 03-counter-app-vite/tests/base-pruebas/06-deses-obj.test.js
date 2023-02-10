import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Debe retornar un objeto', () => {
  test('UsContext debe retornar un objeto', () => {
      const clave = 123
      const edad = 29
      const nombre = 'juan'
      const rango='Capitan'
      
      
      const useC = usContext({clave, nombre, edad, rango})
      
      expect(useC).toEqual({
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
      })
  })
  
})
