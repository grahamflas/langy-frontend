import React from 'react'

class Deck extends React.Component {

  render(){
    let { category } = this.props.deckObj
    return (
      <div>
        {category}
      </div>
    )
  }
}

export default Deck