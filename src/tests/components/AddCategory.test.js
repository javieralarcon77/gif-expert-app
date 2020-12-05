import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('pruebas en el <AddCategory />',()=>{

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);


    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    });

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiarse la caja de texto', () => {
        const input = wrapper.find('input');
        const value = "Hola Mundo";
        input.simulate('change',{ target:{ value: value } });
    })

    test('no debe de postear la informacion con el submit', () => {
        wrapper.find('form').simulate('submit',{
            preventDefault: () => {  }
        });        
        expect( setCategories ).not.toHaveBeenCalled();
    })
    

    test('debe de enviar el submit del formulario llamar al setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = "Hola Mundo";
        input.simulate('change',{ target:{ value: value } });

        wrapper.find('form').simulate('submit',{
            preventDefault: () => {  }
        });        
        expect( setCategories ).toHaveBeenCalled();

        expect( input.text() ).toBe('');

    });
    
    
    
})