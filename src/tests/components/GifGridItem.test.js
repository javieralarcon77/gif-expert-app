import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";


describe('prueba a <GifGridItem />',()=>{

    const title = "Un titulo";
    const url = 'http://localhost/algo.jpg';
    const wrapper = shallow(
        <GifGridItem  title={ title } url={ url } />
    );

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar el titulo correctamente',()=>{
        const parrafo = wrapper.find('p');
        expect( parrafo.text().trim() ).toBe( title );
    });

    test('debe de tener la imagen igual al url',()=>{
        const img = wrapper.find('img');
        //console.log(  );
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });
    
    test('debe de tener animate__fadeIn',()=>{
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( 
            className.includes('animate__fadeIn')
        ).toBe(true);
    })
});