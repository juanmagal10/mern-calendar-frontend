import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

describe('Pruebas en useFetchGifs', () => {

    test('debe de regresar el estado inicial', async() => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        
        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0)
        );
        
        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
  })
})
