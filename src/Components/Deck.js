import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setDeck } from '../Redux/actions'

class Deck  extends React.Component {
  clickHandler = () => {
    let { pathname } = this.props.history.location
    let { slug } = this.props.deckObj
    let { deckObj } = this.props

    this.props.setDeck( deckObj )
    this.props.history.push(`${pathname}/${slug}`)
  }
  
  render() {
    let { category } = this.props.deckObj
    return (
      <div className="ui card" onClick={() => this.clickHandler()}>
          {category}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ( {
  setDeck: (deckObj) => { dispatch( setDeck(deckObj) ) }
} )

export default connect(null, mapDispatchToProps) (withRouter(Deck))