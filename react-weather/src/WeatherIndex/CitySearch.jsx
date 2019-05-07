import React, { Component } from 'react'

class CitySearch extends Component {
  constructor(){
    super()
    this.state = {
      search: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefaul()
    this.props.searchCity(this.state)
  }
  render(){
    return <form onSubmit={this.handleSubmit}>
    Type In the City <input onChange = {this.handleChange} type='text' name='search' />
    <input type='submit' />
    </form>
  }
}



export default CitySearch
