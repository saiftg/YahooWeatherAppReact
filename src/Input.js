import React from 'react';
import { Link } from 'react-router-dom'



const Input = (props) => {
	return(
		<div>
		<form onSubmit = {props.loadWeather}>
		<input type="text" name="city" placeholder="City"/>
		<input type="text" name="country" placeholder="State"/>
		<button>Golf or nah?</button>
		</form>
      
		</div>
		)
}

export default Input;