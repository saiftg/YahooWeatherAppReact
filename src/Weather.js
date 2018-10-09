import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.js';



const Weather = (props)=>{
// class Weather extends React.Component{

	var style1 = {
		color:'red',
		fontSize: '20px'
	}

	// console.log(props);
	// render(){
		console.log("XXXXXXXXXXX");
	console.log(props);
	console.log("XXXXXXXXXXX");	

	return(


		<div className = 'weather-info' style={style1}>


		{props.country&&props.city&& <p>

		
			Location: 
		<span className='weather_value'>{props.city},{props.country}</span></p>}
		

		{props.temp&&<p>Temperature:  
		<span className='weather_value'>Current: {props.temp}F  </span></p>}
		

		{props.humid&& <p>Humidity:
		<span className='weather_value'> {props.humid}%</span></p>}
		

		{props.desc && <p>Current Conditions:
		<span className='weather_value'> {props.desc}</span></p>}



		{props.tomorrow&&<p>Tomorrow:
		<span className='weather_value'> Max Temp : {props.tomorrow}F / Min Temp : {props.tomorrowMin}F / Conditions : {props.tomorrowCon} </span></p>}

		{props.tomorrow2&&<p>Tomorrow + 1:
		<span className='weather_value'> Max Temp : {props.tomorrow2}F / Min Temp : {props.tomorrowMin2}F / Conditions : {props.tomorrowCon2} </span></p>}

		{props.tomorrow3&&<p>Tomorrow + 2:
		<span className='weather_value'> Max Temp : {props.tomorrow3}F / Min Temp : {props.tomorrowMin3}F / Conditions : {props.tomorrowCon3} </span></p>}
		

		{props.notes&& <p>{props.notes}</p>}




		</div>

		)


}
// }

export default Weather;