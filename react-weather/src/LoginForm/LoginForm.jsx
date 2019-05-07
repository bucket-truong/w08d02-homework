import React, {Component} from 'react'

class LoginForm extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    document.querySelector('#login-form').childNodes.forEach((node)=>{
      node.value = ''
    })
    this.props.handleLogin(this.state)
  }
  render(){
    return <div>
    <form id='login-form' onSubmit = {this.handleSubmit}>
      username:<input onChange = {this.handleChange} type='text' name='username'/>
      password:<input onChange = {this.handleChange} type='text' name='password'/>
      <input type='submit'/>
    </form>
    </div>
  }
}


export default LoginForm
