import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

//pruebas usando mocks para simular la ejecucion de hook
describe('pruebas sobre el componente <GifGrid />',()=>{
    const category = 'One Piece'
    
    test('debe de verse correctamente el componente', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={ category } />);
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('debe de mostrar items cuando se cargan imagenes useFetchGifs',()=>{
        const gifs = [{
            id: '1',
            title: 'Imagen 1',
            url:'https://localhost/img1.png'
        },
        {
            id: '2',
            title: 'Imagen 2',
            url:'https://localhost/img2.png'
        }];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid category={ category } />);
        
        //valida que la foto sea igual al anterior
        expect( wrapper ).toMatchSnapshot();

        //valida que el parrafo que muestra loading no exista
        expect( wrapper.find('p').exists() ).toBe( false );

        //valida que se creen los elmentos correctamente
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
        

    });

})