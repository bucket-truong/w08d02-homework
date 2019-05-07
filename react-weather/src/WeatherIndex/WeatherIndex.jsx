import React, { Component } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import CitySearch from '../WeatherIndex/CitySearch'


class WeatherIndex extends Component {
  constructor(){
    super()
    this.state = {
      cityName:'',
      main:'',
      weather:[]

    }
  }
  componentDidMount(){
    // this.searchCity({search:''})
    this.searchCity('Denver')
  }
  searchCity = (formData) => {
    const searchURL = `https://api.openweathermap.org/data/2.5/weather?q=${formData}&APPID=5a3006b50c75c299630fcd16450bfbed`

    fetch(searchURL)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        cityName: data.name,
        main: data.main,
        weather: data.weather
      })
      console.log(this.state);
    })
    .catch((e) => console.log(e))

  }
  render(){
    const weatherList = this.state.weather.map((weather) => {
      return(
        <div>
        <p>Condition: {weather.main}</p>
        <p>Current: {weather.description}</p>
        </div>
      )
    })
    return (<div>
            <h1>Today</h1>
            <CitySearch searchCity = {this.searchCity} />

            <p>{this.state.cityName}</p>
            <p>Humidity: {this.state.main.humidity}</p>
            <p>Temp: {this.state.main.temp}</p>
            <p>High: {this.state.main.temp_max}</p>
            <p>Low: {this.state.main.temp_min}</p>
               {weatherList}

           </div>
         )
  }
}


export default WeatherIndex
