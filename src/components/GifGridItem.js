
export const GifGridItem = ( { url, id, title } ) => {

	return (
		<div className="card animate__animated animate__fadeIn">
			<img src={ url } alt= { title } />
			<div className="title">
				<p> { title } </p>
			</div>
		</div>
	)
}
