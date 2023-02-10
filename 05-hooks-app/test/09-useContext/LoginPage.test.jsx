import { screen, render, fireEvent } from "@testing-library/react";
import LoginPage from "../../src/09-useContext/LoginPage";
import { UserContext, USerContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en el <LoginPage/>', () => {
    const user = {
        id: 123,
        name: 'Juan',
        email: 'juan@google.com'
    }
    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage/>
            </UserContext.Provider>
        )
        
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    
  })
    
    test('debe de llamar el setUser cuando se hace click en el boton', () => {
        const setUserMock = jest.fn();


        render(
            <UserContext.Provider value={{ user: null, setUser:setUserMock }}>
                <LoginPage/>
            </UserContext.Provider>
        )
        
        const btnUser = screen.getByLabelText('btn-user');
        fireEvent.click(btnUser);

        expect(setUserMock).toHaveBeenCalledWith({"email": "juan@google.com", "id": 123, "name": "Juan"});
  
    })
    
  
})
