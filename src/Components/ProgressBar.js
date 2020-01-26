import React from 'react'

class ProgressBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentCardDisplay: props.currentCard,
      deckLength: props.deckWords.length
    }
  }
  // componentDidMount(){
  //   this.setDeckLength()
  // }

  // setDeckLength = () => {
  //   this.setState({
  //     deckLength: this.props.deckWords.length
  //   })
  // }

  // updateCurrentCard = () => {
  //   this.setState({
  //     currentCard: this.props.currentCard + 1,
  //   })
  // }

  render(){
    const {currentCardDisplay, deckLength} = this.state
    return(
      <div>
        {`Card ${currentCardDisplay} of ${deckLength}`}
      </div>
    )
  }
}

export default ProgressBar