import React from 'react'
import { connect } from 'react-redux'

class DrillCard extends React.Component{
  constructor(){
    super()
    this.state={
      currentCard: 0, 
      answer: ""
    }
  }

  componentDidMount(){
    const { currentCard } = this.state

    this.setState( {
      answer: this.props.deckWords[currentCard].word_english
    } )
  }

  nextCard( state ){
    let nextCard = state.currentCard >= this.props.deckWords.length-1 ? ( 0 ) : ( state.currentCard + 1 )

    console.log("Current card:", this.state.currentCard, "Next card: ", nextCard)

    this.setState( {
      currentCard: nextCard,
      answer: this.props.deckWords[nextCard].word_english
    } )
  }


  render(){
    const { deckWords } = this.props
    console.log( deckWords )
    return(
    <div>
        <div className="drill-card-container">
          <div className="drill-card">
            <div className="drill-card-front">
              <h1>{deckWords[this.state.currentCard].word_target_language}</h1>
            </div>
          </div>
        </div>
  
        <button onClick={ () => this.nextCard(this.state)} >Next Card</button>
    </div>
    )
  }

}

const mapStateToProps = state => ({
  deckWords: state.deckWords
})

export default  connect(mapStateToProps ) (DrillCard)