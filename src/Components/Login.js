import React from 'react';
import { connect } from 'react-redux';
import { fetchingUser } from '../Redux/actions'
import { Grid, Button, Form } from 'semantic-ui-react'


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
        <Form className="ui large form" onSubmit={this.submitHandler}>
          <div className="ui stacked segment">
            <Form.Field>
              <label>Username</label>
              <input  name="username"
                      value={this.state.username}
                      onChange={this.changeHandler}/>
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input  type="password" 
                      name="password"
                      value={this.state.password}
                      onChange={this.changeHandler}/>
            </Form.Field>
          </div>
          <Button type='submit'>Login</Button>
        </Form>
        {/* <form className="ui form" onSubmit={this.submitHandler}>
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
        </form> */}
      </div>)
  }

}

const mapDispatchToProps = dispatch => ( {
  fetchingUser: (userInfo) => { dispatch( fetchingUser(userInfo) ) }
} )

export default connect( null, mapDispatchToProps )(Login)