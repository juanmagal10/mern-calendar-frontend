import { render, screen } from "@testing-library/react";

import { UserContext, USerContext } from '../../src/09-useContext/context/UserContext';
import HomePage from '../../src/09-useContext/HomePage'

describe('Pruebas en el componente de <HomePage/>', () => {
    const user = {
            id: 1,
            name: 'fernando'
    }
  test('debe de mostrar el componente sin el usuario', () => {
      render(
          <UserContext.Provider value={{user:null}}>
              <HomePage/>
          </UserContext.Provider>
      );
      
      const preTag = screen.getByLabelText('pre');
      expect(preTag.innerHTML).toBe('null');
      
  })
    
    test('debe de mostrar el componente con el usuario', () => {
    
      render(
          <UserContext.Provider value={{user}}>
              <HomePage/>
          </UserContext.Provider>
      );
      
      const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(`${user.id}`);
        expect(preTag.innerHTML).toContain(user.name);
  })
  
})
