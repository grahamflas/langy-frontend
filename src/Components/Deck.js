import React from 'react'
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom'

class Deck  extends React.Component {
  constructor( props ){
    super( props )
  }

  showDeckCards = ( event ) => {
    console.log( this.props )
    this.props.history.push(`${this.props.history.location.pathname}/${this.props.deckObj.category}`)
  }
  
  render() {
    let { category } = this.props.deckObj
    return (
      <div onClick={(event) => this.showDeckCards(event)}>
        {/* `/decks/${this.props.lang.slug}` */}
          {category}
      </div>
    )
  }
}

export default withRouter(Deck)