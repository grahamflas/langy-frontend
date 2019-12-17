export function fetchedUser(userObj){
  return { type: "FETCH_USER", payload: userObj }
}

export function fetchingUser(userInfo) {
  return (dispatch) => {
    fetch("http://localhost:3000/login", {
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
  console.log("in setLanguage()")
  return { type: "SET_LANGUAGE", payload: langObj }
}