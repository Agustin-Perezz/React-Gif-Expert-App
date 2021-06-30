import { shallow } from 'enzyme';
import { GifGridItem } from "../components/GifGridItem"
import '@testing-library/jest-dom';
import '../setupTests';

describe('Pruebas en el componente GifGridItem', () => {

	const title = 'Pepe';
	const url = '123'
	const wrapper = shallow( <GifGridItem title={ title } url={ url } />);

	test('Verificacion componente', () => {
		
		expect( wrapper ).toMatchSnapshot();

	})

	test('Deve de encontrarse un parrafo', () => {

		const p = wrapper.find('p');
		expect( p.text().trim() ).toBe( title );		

	})

	test('Deve de encontrarse una imagen', () => {

		const img = wrapper.find('img');
		// console.log( img.prop('alt'))
		// expect( img.prop('src')).toBe( url );
		// expect( img.prop('alt')).toBe( title );

	})
	
	test('Deve de contener el div la clase animate__fadeIn', () => {

		const div = wrapper.find('div');
		const className = div.prop('className');
		// const clase = div.prop('className')
		expect( className.includes('animate__fadeIn')).toBe( true );
		
	})
	

})
