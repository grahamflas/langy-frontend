import React from 'react'
import { connect } from 'react-redux'

class QuizCard extends React.Component{
  constructor(){
    super()
    this.state={
      currentCard: 0,
      correctAnswer: "", 
      userInput: ""
    }
  }

  changeHandler = () => {
    console.log("handling change")
  }

  render(){
    const { deckWords } = this.props
    return(
      <div>

        <div className="drill-card-container">
          <div className="drill-card">
            <div className="drill-card-front">
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
          </div>
        </div>

        <div>
          <input
            type="text"
            onChange={ () => this.changeHandler() }
          />
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ( {
  deckWords: state.deckWords
} )

export default connect(mapStateToProps)(QuizCard)
