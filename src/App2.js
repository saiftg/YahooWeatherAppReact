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



class App2 extends Component {

  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    humid: undefined,
    desc: undefined,
    notes: undefined,
    tomorrow: undefined,
    tomorrow2: undefined,
    tomorrow3: undefined,
    tomorrowMin: undefined,
    tomorrowMin2: undefined,
    tomorrowMin3: undefined,
    tomorrowCon: undefined,
    tomorrowCon2: undefined,
    tomorrowCon3: undefined,

  }

  getWeather = async (event) =>{

    
    event.preventDefault();

    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const apiYahoo = await fetch(`https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + ${city} + '")&format=json&env=store://datatables.org/alltableswithke`);
    const results = await apiYahoo.json();

    if(city && country){

    this.setState({
      city: results.query.results.channel.location.city,
      country: results.query.results.channel.location.country,
      temp: results.query.results.channel.item.condition.temp,
      // temp_max: results.main.temp_max,
      // temp_min: results.main.temp_min,
      humid: results.query.results.channel.atmosphere.humidity,
      desc: results.query.results.channel.item.condition.text,
      notes: "",
      tomorrow: results.query.results.channel.item.forecast[0].high,
      tomorrow2: results.query.results.channel.item.forecast[1].high,
      tomorrow3: results.query.results.channel.item.forecast[2].high,
      tomorrowMin: results.query.results.channel.item.forecast[0].low,
      tomorrowMin2: results.query.results.channel.item.forecast[0].low,
      tomorrowMin3: results.query.results.channel.item.forecast[0].low,
      tomorrowCon: results.query.results.channel.item.forecast[0].text,
      tomorrowCon2: results.query.results.channel.item.forecast[1].text,
      tomorrowCon3: results.query.results.channel.item.forecast[2].text,

    })
    }else{
      this.setState({
      notes: "Input values required!"  
      })
    }


    console.log("888888*********************results");
    console.log(results);
   
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
            
            <Weather
            city= {this.state.city}
            country= {this.state.country}
            temp= {this.state.temp}
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

export default App2;
