import React from 'react'
import { withRouter } from 'react-router-dom'

class Deck  extends React.Component {
  clickHandler = () => {
    let { pathname } = this.props.history.location
    let { slug } = this.props.deckObj

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

export default withRouter(Deck)