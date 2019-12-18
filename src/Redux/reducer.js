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

const rootReducer = combineReducers( {
  currentUser: currentUserReducer,
  selectedLanguage: selectedLanguageReducer,
  userWords: userWordsReducer
} )

export default rootReducer;