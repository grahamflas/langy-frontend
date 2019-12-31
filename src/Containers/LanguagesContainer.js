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

        <div className="ui centered grid">
          { 
            this.state.languages.map( lang => < Language key={lang.name} lang={lang}/> )
          }
        </div>
      </div>
    )
  }
}

export default Languages