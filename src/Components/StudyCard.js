import React from 'react'
import { connect } from 'react-redux'
import ProgressBar from './ProgressBar'

class StudyCard extends React.Component {

  constructor(){
    super()
    this.state = {
      currentCard: 0
    }
  }

  cardBackwards = () => {
    this.state.currentCard >= 1 ? (
      this.setState( {
        currentCard: this.state.currentCard - 1
      } )
    ) : (
      this.setState( {
        currentCard: this.props.deckWords.length-1
      } )
    )
  }

  cardForwards = () => {
    this.state.currentCard >= this.props.deckWords.length-1 ? (
      this.setState( {
        currentCard: 0
      } )
    ) : (
      this.setState( {
        currentCard: this.state.currentCard + 1
      } )
    )
  }

  render(){
    const {currentCard} = this.state
    const {deckWords} = this.props

    {/* for a split second, we're rendering the previous deck. Fix this */}
    return(
      <div>
         <ProgressBar currentCardDisplay={currentCard + 1} deckLength={deckWords.length}/>
        { deckWords.length > 0 ? (
          <div>
            <div className="flip-card-container">
                <div className="flip-card">
                  <div className="flip-card-front">
                    <h1 className="card-word">{deckWords[this.state.currentCard].word_target_language}</h1>
                    <br/>
                    { 
                      deckWords[this.state.currentCard].pronunciation ? (
                        <p className="pronunciation">
                          ( {deckWords[this.state.currentCard].pronunciation} )
                        </p>
                      ) : null 
                    }
                  </div>

                  <div className="flip-card-back">
                    <h1 className="card-word"> { deckWords[this.state.currentCard].word_english } </h1>
                  </div>
                </div>
            </div>
    
            <div className="study-card button-container">
              <button onClick={this.cardBackwards}> - </button>
                {this.state.currentCard+1} of {deckWords.length}
              <button onClick={this.cardForwards}> + </button>
            </div>

          </div>
        ) : null }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  deckWords: state.deckWords
})

export default connect(mapStateToProps) (StudyCard)