import { configureStore } from "@reduxjs/toolkit";
import { act, renderHook } from "@testing-library/react"
import { Provider } from "react-redux";
import { useUiStore } from "../../src/hooks"
import { store, uiSlice } from "../../src/store";

const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            ui:uiSlice.reducer
        },
        preloadedState: {
            ui:{...initialState}
        }
    })
}

describe('Pruebas en el useUiStore', () => {
    test('Debe regresar los valores por defecto', () => {
        const mockStore = getMockStore({ isDateModalOpen: false });

        const { result } = renderHook(() => useUiStore(), {
            wrapper: ({ children }) => <Provider store={store}>
                {children}
            </Provider>
        });

        expect(result.current).toEqual({
            isDateModalOpen: false,
            closeDateModal:expect.any(Function),
            openDateModal:expect.any(Function),
            toggleDateModal:expect.any(Function),
        })
    });

    test('openDateModal debe de colocar true en el isDateModalOpen', () => {
        const mockStore = getMockStore({ isDateModalOpen: false });

        const { result } = renderHook(() => useUiStore(), {
            wrapper: ({ children }) => <Provider store={store}>
                {children}
            </Provider>
        });

        const { isDateModalOpen, openDateModal } = result.current;

        act(() => {
            openDateModal();
        });

        expect(result.current.isDateModalOpen).toBeTruthy();
    });

    test('closeDateModal debe de colocar false en isDatemodalOpen', () => {
        const mockStore = getMockStore({ isDateModalOpen: false });

        const { result } = renderHook(() => useUiStore(), {
            wrapper: ({ children }) => <Provider store={store}>
                {children}
            </Provider>
        });

        act(() => {
            result.current.closeDateModal();
        });
        
        expect(result.current.isDateModalOpen).toBeFalsy();
    });

    test('toggleDateModal debe de cambiar el estado', () => {
        const mockStore = getMockStore({ isDateModalOpen: true });

        const { result } = renderHook(() => useUiStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>
                {children}
            </Provider>
        });

        act(() => {
            result.current.toggleDateModal();
        });
        expect(result.current.isDateModalOpen).toBeFalsy();

        act(() => {
        result.current.toggleDateModal();
        });
        expect(result.current.isDateModalOpen).toBeTruthy();
    });
    

    
  
});
