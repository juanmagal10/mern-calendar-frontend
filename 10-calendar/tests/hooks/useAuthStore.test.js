import { authSlice } from "../../src/store";
import { initialStates, notAuthenticatedState } from "../fixtures/authStates";
import { act, renderHook, waitFor } from "@testing-library/react";
import {useAuthStore} from '../../src/helpers/useAuthStore'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { testUserCredentials } from "../fixtures/testUser";
import { calendarApi } from "../../src/api";

const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            auth:authSlice.reducer
        },
        preloadState: {
            auth:{...initialState}
        }
    })
}

describe('Pruebas en el useAuthStore', () => {

    beforeEach(() => localStorage.clear());

    test('Debe de regresar los valores por defecto', () => {
        const mockStore = getMockStore({ ...initialStates });

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>
                {children}
            </Provider>
        });

        expect(result.current).toEqual({
            errorMessage: undefined,
            status: 'checking',
            user: {},
            startLogin: expect.any(Function),
            startRegister: expect.any(Function),
            checkAuthToken: expect.any(Function),
            startLogout: expect.any(Function)
        });
    });
    
    test('startLogin debe de realizar el login correctamente', async () => {
        const mockStore = getMockStore({ ...notAuthenticatedState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>
                {children}
            </Provider>
        });

        await act(async () => {
            await result.current.startLogin(testUserCredentials)
        });
        const { errorMessage, status, user } = result.current;
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'Test user', uid: '6409ea07482117a0b4096d79' }
        });

        expect(localStorage.getItem('token')).toEqual(expect.any(String))
        expect(localStorage.getItem('token-init-date')).toEqual(expect.any(String))
      
    });

    test('startLogin debe de fallar la autenticacion', async () => {
        const mockStore = getMockStore({ ...notAuthenticatedState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>
                {children}
            </Provider>
        });

        await act(async () => {
            await result.current.startLogin({ email: 'algo@google.com', password: '123456' })
        });

        const { errorMessage, status, user } = result.current;
        expect(localStorage.getItem('token')).toBe(null);
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: expect.any(String),
            status: 'not-authenticated',
            user: {}
        });
        
        await waitFor(
            () => expect(result.current.errorMessage).toBe(undefined)
        );
    });

    test('startRegister debe de crear un usuario', async () => {
        const newUser = { email: 'algo2@google.com', password: '1234567', name: 'test register name' };
        const mockStore = getMockStore({ ...notAuthenticatedState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>
                {children}
            </Provider>
        });

        const spy = jest.spyOn(calendarApi, 'post').mockReturnValue({
            data: {
                ok: true,
                uid: "63eea4cb80276e1a2e532660",
                name: "register test user",
                token: "algun token"
            }
        });

        await act(async () => {
            await result.current.startRegister(newUser)
        });

        const { errorMessage, status, user } = result.current;

        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: {
                uid: "63eea4cb80276e1a2e532660",
                name: "register test user"
            }
        });

        spy.mockRestore();
    });

    test('startRegister debe fallar la creacion', async () => {
             
        const mockStore = getMockStore({ ...notAuthenticatedState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>
                {children}
            </Provider>
        });

        await act(async () => {
            await result.current.startRegister(testUserCredentials)
        });

        const { errorMessage, status, user } = result.current;

        expect({ errorMessage, status, user }).toEqual({
            errorMessage: 'El correo ya esta registrado',
            status: 'not-authenticated',
            user: {}
        });

        
        
    });
    
    test('checkAuthToken debe fallar si no hay token', async () => {
        const mockStore = getMockStore({ ...initialStates });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>
                {children}
            </Provider>
        });

        await act(async () => {
            await result.current.checkAuthToken(testUserCredentials)
        });

        const { errorMessage, status, user } = result.current;
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'not-authenticated',
            user: {}
        });
    });

    test('checkAuthToken debe de autenticar el usuario si hay un token', async () => {
        const { data } = await calendarApi.post('/auth', testUserCredentials);
        localStorage.setItem('token', data.token);

            const mockStore = getMockStore({ ...initialStates });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>
                {children}
            </Provider>
        });


        await act(async () => {
            await result.current.checkAuthToken(testUserCredentials)
        });

        const { errorMessage, status, user } = result.current;
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'Test user', uid: '6409ea07482117a0b4096d79' }
        });
    });


    
   
    
    

  
});
