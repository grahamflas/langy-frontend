import React from 'react'

class ProgressBar extends React.Component{

  render(){
    const {currentCardDisplay, deckLength} = this.props
    return(
      <div>
        {`Card ${currentCardDisplay} of ${deckLength}`}
      </div>
    )
  }
}

export default ProgressBar