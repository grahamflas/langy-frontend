import React from 'react';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "", 
      password: ""
    }
  }

  changeHandler = (event) => {
    this.setState( {
      [event.target.name]: event.target.value
    } )
  }

  submitHandler = (event) => {
    event.preventDefault()
    let userInfo = {
      username: this.state.username,
      password: this.state.password
    }
    debugger
  }

  render(){
    return (
      <div>
        <form className="ui form" onSubmit={this.submitHandler}>
          <label htmlFor="username">Username</label>
          <input 
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.changeHandler}
          />

          <label htmlFor="password">Password</label>
          <input 
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <button type="submit">Login</button>
        </form>
      </div>)
  }

}

export default Login