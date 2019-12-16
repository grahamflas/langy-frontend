import React from 'react'
import { Link } from 'react-router-dom'

class Language extends React.Component{
  render(){
    return(
      <div>
        <Link to={`/decks/${this.props.lang.slug}`}>
          {this.props.lang.name}
        </Link>
      </div>
    )
  }
}

export default Language