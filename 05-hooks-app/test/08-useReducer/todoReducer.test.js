import {todoReducer} from '../../src/08-useReducer/todoReducer'

describe('Pruebas en el  todoReducer', () => {
    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }]

    test('debe regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    })
    
    test('debe agregar un TODO', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect( newState ).toContain(action.payload)
    })

    test('debe de eliminar un TODO', () => {
          const action = {
            type: '[TODO] Remove TODO',
            payload:1
              
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
        
        
    });
    
    test('debe realizar el Toggle de un TODO', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload:1,
        };
        
        const newState = todoReducer(initialState,action);
        expect(newState[0].done).toBe(true)
    });
    

  
})
