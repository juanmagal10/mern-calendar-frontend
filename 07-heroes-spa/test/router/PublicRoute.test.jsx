import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "../../src/router/PublicRoute";



describe('Pruebas en <PublicRoute/>', () => {
    test('debe de mostrar el children si no esta autenticado', () => {
        const contextValue = {
            authState: {
                logged:false
            }
        }
      
        render(
               <AuthContext.Provider value={contextValue}>
                <PublicRoute >
                    <h1>ruta publica</h1>
                </PublicRoute >
            </AuthContext.Provider>
        )

        expect(screen.getByText('ruta publica')).toBeTruthy();
    });

    test('debe de navegar si esta autenticado', () => {
        const contextValue = {
            authState:{
                logged: true, 
            user: {
                name: 'Strider',
                id:'123'
            }
            }
        }
        render(
                <AuthContext.Provider value={contextValue}>
                <MemoryRouter  initialEntries={['/marvel']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>ruta publica</h1>
                            </PublicRoute >
                        } />
                        <Route path='marvel' element={<h1>pagina marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('pagina marvel')).toBeTruthy();
    })
    
  
});

      
        
