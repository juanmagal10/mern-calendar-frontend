import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../../src/auth";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../../src/ui/components/Navbar";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=>mockedUseNavigate
}));



describe('Pruebas en el componente de navbar', () => {
    const contextValue = {
        authState: {
            logged: true,
            user: {
            name:'juan'
            },
        },
        logout: jest.fn()
    }

    beforeEach(()=>jest.clearAllMocks())

    test('debe de mostrar el nombre del usuario logueado', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('juan')).toBeTruthy();
    })

    test('debe de llamar el logout y navigate cuando se hace click en el boton', () => {
         render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        const logoutBtn = screen.getByRole('button')
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {'replace':true});

    })
    
    
  
})
