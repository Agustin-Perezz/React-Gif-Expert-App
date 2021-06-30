import PropTypes from 'prop-types'

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

GifGridItem.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}