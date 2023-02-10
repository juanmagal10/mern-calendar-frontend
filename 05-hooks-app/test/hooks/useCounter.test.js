import { fireEvent, renderHook, act } from "@testing-library/react";
import {useCounter} from '../../src/hooks/useCounter'

describe('Pruebas en el useCounter', () => {
  test('debe retornar los valores por defecto ', () => {
      const { result } = renderHook(() => useCounter());
      const { counter, decrement, reset, increment } = result.current;

      expect(counter).toBe(10);
      expect(decrement).toEqual(expect.any(Function))
      expect(increment).toEqual(expect.any(Function))
      expect(reset).toEqual(expect.any(Function))
  })
    
    test('debe generar el counter con el valor de 100', () => {
           const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        
        expect(counter).toBe(100); 
        
    })

    test('increment debe incrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment } = result.current;
        act(() => {
            increment();
            increment(2);
            
        })
    
        expect(result.current.counter).toBe(13);
    })

    test('decrement debe decrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrement } = result.current;
        act(() => {
            decrement();
            decrement(2);
            
        })
    
        expect(result.current.counter).toBe(7);
    })

    test('reset debe reestablecer el valor inicial', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, reset,decrement } = result.current;
        act(() => {
            decrement(2);
            reset()
            
        })
    
        expect(result.current.counter).toBe(10);
    })

    
    
  
})
