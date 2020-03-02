import React from 'react';
import { connect } from 'react-redux';
import { fetchingUser } from '../Redux/actions'
import { Grid, Button, Form, Image } from 'semantic-ui-react'


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
        <Grid className="login-container" textAlign='center' verticalAlign='middle'>
            <Grid.Column width={6}>
              <Image className="login-logo" src="https://fontmeme.com/permalink/200302/1067afe7fce910cb27b003ef0ab6d633.png" alt="black-rose-font-langy"/>
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
              <p className="new-user-message">New to Langy? Enter a username and password and click "Login or Sign Up"</p>
                <Button type='submit'
                        style={{backgroundColor: '#F5C245'}}>Login or Sign Up</Button>
              </Form>
            </Grid.Column>
        </Grid>
    )
  }

}

const mapDispatchToProps = dispatch => ( {
  fetchingUser: (userInfo) => { dispatch( fetchingUser(userInfo) ) }
} )

export default connect( null, mapDispatchToProps )(Login)