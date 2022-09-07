import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory'
import {GridItems} from './components/GridItems'
import { CustomTitle } from './components/ui/CustomTitle'

const GifExpertApp = () => {
	const [categorias, setCategorias] = useState(['One Punch'])

	return (
		<>
			<div className='header'>
				<CustomTitle />
				<AddCategory setCategorias= { setCategorias } />
			</div>	
			<hr className='separator-line'/>
		
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
