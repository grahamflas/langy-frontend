import React from 'react';
import './Assets/App.css';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import LanguagesContainer from './Containers/LanguagesContainer';
import DeckContainer from './Containers/DeckContainer';
import CardContainer from './Containers/CardContainer';

function App( props ) {
  return (
      <div className="App">
        {/* redirect to login */}
        {props.currentUser.username ? <Redirect to={"/languages"} /> : <Redirect to={"/login"} />}
        <Route exact path="/login" component={Login} />
  
        {/* show NavBar on all pages if logged in */}
        { props.currentUser.username ? <NavBar/> : null }
  

        <Route exact path="/languages"  component={LanguagesContainer} />
        <Route exact path="/decks/:language/:category" component={CardContainer} />
        < Route exact path="/decks/:language" component={DeckContainer} />
      </div>
  );
}



const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export const BASE_URL = "http://localhost:3000"
export default connect( mapStateToProps )(App);
