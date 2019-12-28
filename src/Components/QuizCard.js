import React from 'react'
import { connect } from 'react-redux'

class QuizCard extends React.Component{
  constructor(){
    super()
    this.state={
      currentCard: 0,
      correctAnswer: "", 
      userInput: "",
      correctCount: 0
    }
  }

  componentDidMount(){
    const { currentCard } = this.state
    const { deckWords } = this.props

    this.setState( {
      correctAnswer: deckWords[currentCard].word_english
    } )
  }

  changeHandler = ( event ) => {
    this.setState( { userInput: event.target.value } )
  }

  submitHandler = () => {
    this.checkAnswer()
  }

  checkAnswer = () => {
    const { correctAnswer, userInput } = this.state
    console.log("correct answer: ", correctAnswer, "input: ", userInput)
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
            onChange={this.changeHandler}
          />

          <input 
            type="submit"
            onClick={this.submitHandler}
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
