import { combineReducers } from 'redux';

const currentUserReducer = ( oldState={}, action ) => {
  switch( action.type ){
    case "FETCH_USER":
      return action.payload
    default:
      return oldState;
  }
}

const rootReducer = combineReducers( {
  currentUser: currentUserReducer
} )

export default rootReducer;