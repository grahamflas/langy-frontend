import React from 'react';
import { connect } from 'react-redux';
import { fetchingUser } from '../Redux/actions'

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
    this.props.fetchingUser( userInfo )
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

const mapDispatchToProps = dispatch => ( {
  fetchingUser: (userInfo) => { dispatch( fetchingUser(userInfo) ) }
} )

export default connect( null, mapDispatchToProps )(Login)