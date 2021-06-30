import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con la funcion getGifs', () => {

	test('Deve de retornar 10 elementos', async() => {

		const gifs = await getGifs('One Punch');
		expect( gifs.length ).toBe( 10 );
		
	})
	
	
})
