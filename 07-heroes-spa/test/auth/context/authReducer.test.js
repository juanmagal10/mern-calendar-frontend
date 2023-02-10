import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en el auth reducer', () => {
    test('debe retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    })
    
    test('debe de llamar el login, autenticar y establecer el usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id:'123'
            }
        }
        
        const state = authReducer({ logged: false }, action)
        expect(state).toEqual({
            logged: true,
            user:action.payload
        });
    })

    test('logout debe de borrar el name del usuario y establecer el logged en false', () => {
        const state = {
            logged: true,
            user:{id:'123', name:'juan'}
        }
        const action = {
            type:types.logout
        }
        
        const newState = authReducer(state, action)
        console.log(newState);
        expect(newState).toEqual({logged:false})
    })
    
    
  
})
