import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setDeck } from '../Redux/actions'

class Deck  extends React.Component {
  clickHandler = () => {
    let { deckObj, deckObj: { slug }, history: { location: {pathname}  } } = this.props

    this.props.setDeck( deckObj )
    this.props.history.push(`${pathname}/${slug}/study`)
  }
  
  render() {
    let { category } = this.props.deckObj
    return (
      <div className="deck-card" onClick={this.clickHandler}>
          <div className="deck-name">
            {category}
          </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ( {
  setDeck: (deckObj) => { dispatch( setDeck(deckObj) ) }
} )

export default connect(null, mapDispatchToProps) (withRouter(Deck))