import { combineReducers } from 'redux';

const currentUserReducer = ( oldState={}, action ) => {
  switch( action.type ){
    case "FETCH_USER":
      return action.payload
    default:
      return oldState;
  }
}

const selectedLanguageReducer = ( oldState={}, action ) => {
  switch( action.type ){
    case "SET_LANGUAGE":
      return action.payload
    default:
      return oldState;
  }
}

const userWordsReducer = ( oldState = [], action ) => {
  switch( action.type ){
    case ("SET_USERWORDS"):
      return action.payload
    default: 
      return oldState;
  }
}

const selectedDeckReducer = ( oldState={}, action ) => {
  switch( action.type ){
    case( "SET_DECK" ):
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers( {
  currentUser: currentUserReducer,
  userWords: userWordsReducer,
  selectedLanguage: selectedLanguageReducer,
  selectedDeck: selectedDeckReducer
} )

export default rootReducer;