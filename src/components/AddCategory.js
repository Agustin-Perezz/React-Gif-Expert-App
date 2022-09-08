import React, { useState } from 'react'
import { PropTypes } from "prop-types";

import searchIcon from '../assets/images/search.png';

export const AddCategory = ( { setCategorias } ) => {

	const [inputValue, setInputValue] = useState('');

	const handleEventChange = (e) => {
		setInputValue( e.target.value );
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if ( inputValue.trim().length > 2 ) {
			setCategorias( cats => [  inputValue, ...cats, ]);
			setInputValue( '' );
		}

	}

	return (
		<form className='form' onSubmit={ handleSubmit }>
			<div className='container-icon' onClick={ handleSubmit }>
				<img src={ searchIcon } alt='search' className='icon'/>
			</div>
			<input 
				value={inputValue}
				type="text" 
				onChange={ handleEventChange }
				className='input'
				placeholder='Search any gif...'
				autoFocus='true'
			/>
		</form>
	)
}

AddCategory.propTypes = {
	setCategorias: PropTypes.func.isRequired
}
