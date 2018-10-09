import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Input from './Input.js';
import Weather from './Weather.js';
import NavBar from './NavBar.js';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

const apiKey = `d97e07323bb27edb864d550f337de5a6`;


class App extends Component {

  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    humid: undefined,
    desc: undefined,
    notes: undefined,
    tomorrow: undefined,
    tomorrow2: undefined,
    tomorrow3: undefined
  }

  getWeather = async (event) =>{

    
    event.preventDefault();

    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    const apiWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${apiKey}`);
    const apiForecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&appid=${apiKey}`);
    // const apiYahoo = await fetch(`https://query.yahooapis.com/v1/public/yql?q=${city}&format=json`);
    // const apiYahoo = await fetch(`http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.places%20where%20text%3D%22${city}%22&format=json`);
    const apiYahoo = await fetch(`https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + ${city} + '")&format=json&env=store://datatables.org/alltableswithke`);
    const results = await apiWeather.json();
    const results2 = await apiForecast.json();
    const results3 = await apiYahoo.json();

    if(city && country){

    this.setState({
      city: results.name,
      country: results.sys.country,
      temp: results.main.temp,
      temp_max: results.main.temp_max,
      temp_min: results.main.temp_min,
      humid: results.main.humidity,
      desc: results.weather[0].description,
      notes: "",
      tomorrow: results2.list[2].main.temp_max,
      tomorrow2: results2.list[8].main.temp_max,
      tomorrow3: results2.list[14].main.temp_max,
      tomorrowMin: results2.list[2].main.temp_min,
      tomorrowMin2: results2.list[8].main.temp_min,
      tomorrowMin3: results2.list[14].main.temp_min,
      tomorrowCon: results2.list[2].weather[0].description,
      tomorrowCon2: results2.list[8].weather[0].description,
      tomorrowCon3: results2.list[14].weather[0].description,

    })
    }else{
      this.setState({
      notes: "Input values required!"  
      })
    }


    console.log("888888*********************results");
    console.log(results);
    console.log(results2);
    console.log(results3);
    console.log("888888*********************results");

  }

  render() {
    return (
      <Router>
      <div>
        <div className="wrapper">
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className = 'col-xs-5 title-container'>
            <Header/>
                </div>
                <div className = 'col-xs-7 form-container'>
            <Input loadWeather={this.getWeather}/>
            <Route path="/news" component={NavBar}/>
            <Weather
            city= {this.state.city}
            country= {this.state.country}
            temp= {this.state.temp}
            temp_max= {this.state.temp_max}
            temp_min= {this.state.temp_min}
            humid= {this.state.humid}
            desc= {this.state.desc}
            notes= {this.state.notes}
            tomorrow= {this.state.tomorrow}
            tomorrowMin= {this.state.tomorrowMin}
            tomorrow2= {this.state.tomorrow2}
            tomorrowMin2= {this.state.tomorrowMin2}
            tomorrow3= {this.state.tomorrow3}
            tomorrowMin3= {this.state.tomorrowMin3}
            tomorrowCon= {this.state.tomorrowCon}
            tomorrowCon2= {this.state.tomorrowCon2}
            tomorrowCon3= {this.state.tomorrowCon3}

            />
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </div>
      </Router>
    );
  }
}

export default App;
