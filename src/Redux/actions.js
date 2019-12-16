export function fetchedUser(userObj){
  console.log("in fetchedUser()")
  return { type: "FETCH_USER", payload: userObj }
}

export function fetchingUser(userInfo) {
  console.log("In actions")
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