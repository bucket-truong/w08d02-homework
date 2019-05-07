import React, {Component} from 'react';
import './App.css';
import WeatherIndex from './WeatherIndex/WeatherIndex'
import LoginForm from './LoginForm/LoginForm'

class App extends Component{
  constructor(){
    super()
    this.state = {
      loggedIn: false,
      username: ''
    }
  }
  handleLogin = (formData) => {
    this.setState({
      loggedIn: true,
      username:formData.username
    })
  }
  render(){
    return(
      <div className='App'>
        <h1>React Weather</h1>
          {
            this.state.loggedIn === true ? <WeatherIndex username={this.state.username} /> : <LoginForm handleLogin={this.handleLogin} />
          }
      </div>
    )
  }
}

export default App;
