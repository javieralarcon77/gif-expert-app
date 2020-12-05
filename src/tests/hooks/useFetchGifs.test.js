import { renderHook } from "@testing-library/react-hooks";

import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Prueba sobre custom hook useFetchGifs',()=>{
    
    test('debe de retornar el estado inicial', async () => {
        
        //se usa render hook para poder probar un hook
        const { result, waitForNextUpdate } = renderHook( () =>  useFetchGifs('One Piece') );
        //se obtiene la data
        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect( data.length ).toBe( 0 );
        expect( loading ).toBe( true );
    })
    
    test('debe de retornar un arreglo de imagenes y el loading sea false', async () => {
        //se usa render hook para poder probar un hook
        const { result, waitForNextUpdate } = renderHook( () =>  useFetchGifs('One Piece') );
        
        await waitForNextUpdate();
        
        //se obtiene la data
        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    })
    

});