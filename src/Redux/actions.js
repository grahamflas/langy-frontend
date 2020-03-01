import { BASE_URL } from "../App"

export function fetchedUser(userObj){
  return { type: "FETCH_USER", payload: userObj }
}

export function fetchingUser(userInfo) {
  return (dispatch) => {
    fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }, 
      body: JSON.stringify(userInfo)
    })
      .then( resp => resp.json() )
      .then( userObj => { dispatch( fetchedUser(userObj) ) } )
  }
}

export function setLanguage(langObj){
  return { type: "SET_LANGUAGE", payload: langObj }
}

export function setUserWords(wordsArray){
  return { type: "SET_USERWORDS", payload: wordsArray }
}

export function setDeck(deckObj){
  return { type: "SET_DECK", payload: deckObj }
}

export function setDeckWords(wordsArray){
  return { type: "SET_DECK_WORDS", payload: wordsArray }
}
