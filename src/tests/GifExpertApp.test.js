import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import { GifExpertApp } from '../GifExpertApp';

describe('pruebas sobre el componente <GifExpertApp />',()=>{
    
    test('debe de verse correctamente el componente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    })
    

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['One Piece', 'One Punch Man'];

        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);

        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    

})