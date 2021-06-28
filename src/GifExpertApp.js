import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory'
import {GridItems} from './components/GridItems'

const GifExpertApp = () => {
	const [categorias, setCategorias] = useState(['One Punch'])

	return (
		<>
			<h2>GifExpertApp</h2>	
			<hr />
			<AddCategory setCategorias= { setCategorias } />
		
			<ol>
				{
					categorias.map( category  => {
						return <GridItems 
							key={ category }
							category={ category }
						/> 
					})	
				}
			</ol>
			
		</>
	)
}


export default GifExpertApp
