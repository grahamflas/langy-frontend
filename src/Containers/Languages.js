import React from 'react'
import { BASE_URL } from '../App'

class Languages extends React.Component{
  constructor(){
    super()
    this.state = {
      languages: []
    }
  }

  componentDidMount(){
    fetch( `${BASE_URL}/languages` )
      .then( resp => resp.json() ) 
      .then( langArray => this.setState({
        languages: langArray
      }) )
  }

  render(){
    return(
      <div>
        <h1>Select a language:</h1>
        { 
          this.state.languages.forEach( lang => {return <div>{lang.name}</div>} ) 
        }
      </div>
    )
  }
}

export default Languages