import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Weather from './Weather.js';





// class NavBar extends Component{
const NavBar = (props)=>{
	
	
	console.log(props);

	// render(){
		

		return(


		<div>
		

		
			Location: {props.city}
		


		    <p>Welcome to </p>
  		</div>

		
	
			)
}
// }


export default NavBar;