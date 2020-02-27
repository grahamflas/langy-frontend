import React from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import ProgressBar from './ProgressBar'

class QuizCard extends React.Component{
  constructor(props){
    super()
    this.state={
      currentCard: 0,
      deckLength: props.deckWords.length,
      correctAnswer: "", 
      userInput: "",
      correctCount: 0, 
      quizComplete: false
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

  submitHandler(event){
    event.preventDefault()

    this.setState( {userInput: ""} )
    
    let { correctAnswer, userInput } = this.state
    let cleanCorrectAnswer = this.sanitize( correctAnswer )
    let cleanUserInput = this.sanitize( userInput )
    
    console.log("correct: ",cleanCorrectAnswer, "input: ",cleanUserInput)

    if (cleanCorrectAnswer === cleanUserInput) {
      this.setState( { correctCount: this.state.correctCount + 1 }, () => this.nextCard(this.state) )
    } else {
      this.nextCard(this.state)
    }
  }

  sanitize = ( text ) => {
    // \u2026 = … (ellipsis)
    // \u2019 : ’ (right single quote)
    return text.replace(/\.{3}|\?|\u2026|\u2019|!|'|/gi, "").toLowerCase()
  }
  
  nextCard( state ){
    let { deckWords } = this.props

    let nextCard = ( state.currentCard < this.props.deckWords.length-1 ) ? ( state.currentCard + 1 ) : "end" 

    if (nextCard === "end") {
      this.endQuiz()
    } else {
      this.setState( {
        currentCard: nextCard,
        correctAnswer: deckWords[nextCard].word_english
      } )
    }
  }

  endQuiz(){
    this.setState( {quizComplete: true} )

    let { correctCount, deckLength } = this.state
    const { deckWords } = this.props

    correctCount === deckLength ? (
      Swal.fire({
        icon: "success",
        title: `You answered ${correctCount} out of ${deckLength} words correctly!`,
        showConfirmButton: false, 
        showCloseButton: true,
        onClose: () => {
          this.deckMastered()
        }
      })
    ) : (
      Swal.fire({
        title: `Give it another go. You answered ${correctCount} out of ${deckLength} words correctly.`,
        showConfirmButton: false, 
        showCloseButton: true,
        onClose: () => {
          this.setState( {
            currentCard: 0,
            correctCount: 0,
            correctAnswer: deckWords[0].word_english,
            quizComplete: false
          } )
        }
      })
    )
  }

  deckMastered(){
    this.props.history.push("/decks/german")
  }

  render(){
    const {currentCard, deckLength} = this.state
    const {deckWords} = this.props
    return(
      <div>
        {/* <ProgressBar currentCardDisplay={currentCard + 1} deckLength={deckLength}/> */}
        <div className="drill-card-container">
          <div className="drill-card">
            <div className="drill-card-front">
              <h1 className="card-word">{deckWords[this.state.currentCard].word_target_language}</h1>
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
        
        { this.state.quizComplete ? null : (
          <form className="ui input huge quiz-form" onSubmit={(event) => this.submitHandler(event)} >
            <input className="quiz-input" type="text" value={this.state.userInput} onChange={this.changeHandler} placeholder="Answer..."/>
            <br/>
            <input className="quiz-button" type="submit" value="Submit"/>
          </form>
        ) }
        

      </div>
    )
  }
}

const mapStateToProps = state => ( {
  deckWords: state.deckWords, 
  currentUserID: state
} )

export default connect(mapStateToProps)(QuizCard)