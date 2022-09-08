import { GifGridItem } from './GifGridItem'
import { useFetchApi } from "../hooks/useFetchApi"

export const GridItems = ( { category } ) => {

	const { loading, data:images } = useFetchApi( category );

	return (
		<>
			<h3 className='title-category'> { category } </h3>	

			{ loading && 'Loading..'}

			<div className="card-grid">

				{
					images.map( (img) => {
						return <GifGridItem 
							key= { img.id }
							{ ...img }
						/>
					})
				}

			</div> 
		</>
	)
}
