import React from 'react'
// import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class Deck  extends React.Component {
  // constructor( props ){
  //   super( props )
  // }

  
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