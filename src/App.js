import React from 'react';
import './Assets/App.css';
import { connect } from 'react-redux'
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import LanguagesContainer from './Containers/LanguagesContainer';
import DeckContainer from './Containers/DeckContainer';

function App( props ) {
  return (
      <div className="App">
  
        {props.currentUser.username ? <Redirect to={"/"} /> : <Redirect to={"/login"} />}
  
        <Route exact path="/login">
          < Login />
        </Route>
  
        <Route exact path="/">
          <div>
            < NavBar />
            < LanguagesContainer />
          </div>
        </Route>

        < Route path="/decks">
          <div>
            < NavBar />
            < DeckContainer />
          </div>
        </Route>

      </div>
  );
}



const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export const BASE_URL = "http://localhost:3000/"
export default connect( mapStateToProps )(App);
