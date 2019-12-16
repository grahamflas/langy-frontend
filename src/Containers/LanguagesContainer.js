import React from 'react'
import { BASE_URL } from '../App'
import Language from '../Components/Language'

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
          this.state.languages.map( lang => < Language lang={lang}/> )
        }
      </div>
    )
  }
}

export default Languages