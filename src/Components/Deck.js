import React from 'react'
import { Link } from 'react-router-dom'

class Deck extends React.Component {

  render(){
    let { category } = this.props.deckObj
    return (
      <div>
        {/* `/decks/${this.props.lang.slug}` */}
        <Link>
          {category}
        </Link>
      </div>
    )
  }
}

export default Deck