import { authenticatedState, initialStates } from "../../fixtures/authStates";
import { authSlice, onLogin, onLogout, clearErrorMessage } from "../../../src/store/auth/authSlice";
import { testUserCredentials } from "../../fixtures/testUser";


describe('Pruebas en el authSlice', () => {
    test('debe de regresar el estado inicial', () => {
        expect(authSlice.getInitialState()).toEqual(initialStates)
    })
    
    test('debe de realizar un loguin', () => {
        const state = authSlice.reducer(initialStates, onLogin(testUserCredentials));
        expect(state).toEqual({
            status: 'authenticated',
            user: testUserCredentials,
            errorMessage: undefined
        });
    });

    test('debe de realizar el logout', () => {
        const state = authSlice.reducer(authenticatedState, onLogout());
        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: undefined
        });
    });
    
    test('debe de realizar el logout', () => {
        const errorMessage = 'credencialres no validas'
        const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: errorMessage
        });
    });

    test('debe de limpiar el mensaje de error', () => {
        const errorMessage = 'credencialres no validas'
        const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
        const newState = authSlice.reducer(state, clearErrorMessage())
        
        expect(newState.errorMessage).toBe(undefined)
    })
    
    
  
});
