import React from 'react'
import { connect } from 'react-redux'

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
    const { deckWords } = this.props

    {/* for a split second, we're rendering the previous deck. Fix this */}
    return(
      <div>
        { deckWords.length > 0 ? (
          <div>
            <div className="card-container">
                <div className="card">
                  <div className="card-front">
                    <h1>{deckWords[this.state.currentCard].word_target_language}</h1>
                    <br/>
                    { 
                      deckWords[this.state.currentCard].pronunciation ? (
                        <p className="pronunciation">
                          ( <em>{deckWords[this.state.currentCard].pronunciation}</em> )
                        </p>
                      ) : null 
                    }
                  </div>

                  <div className="card-back">
                    <p> { deckWords[this.state.currentCard].word_english } </p>
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