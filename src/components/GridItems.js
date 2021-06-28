import { GifGridItem } from './GifGridItem'
import { useFetchApi } from "../hooks/useFetchApi"

export const GridItems = ( { category } ) => {

	// const [images, setImages] = useState([]);

	const { loading, data:images } = useFetchApi( category );
	console.log( images )


	return (
		<>
			<h3> { category } </h3>	
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
