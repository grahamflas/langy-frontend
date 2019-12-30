import React from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

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

  submitHandler(event){
    event.preventDefault()
    
    let { correctAnswer, userInput } = this.state
    correctAnswer = correctAnswer.toLowerCase()
    userInput = userInput.toLowerCase()

    if (correctAnswer === userInput) {
      this.setState( { correctCount: this.state.correctCount + 1 } )
    } 

    this.setState( {userInput: ""} )
    this.nextCard(this.state);
  }
  
  checkAnswer = () => {
    let { correctAnswer, userInput } = this.state
    correctAnswer = correctAnswer.toLowerCase()
    userInput = userInput.toLowerCase()

    return correctAnswer === userInput ? true : false
  }

  nextCard( state ){
    console.log( "inside nextCard: ", state )
    let { deckWords } = this.props

    let nextCard = ( state.currentCard < this.props.deckWords.length-1 ) ? ( state.currentCard + 1 ) : ( this.props.deckWords.length-1) 

    this.setState( {
      currentCard: nextCard,
      correctAnswer: deckWords[nextCard].word_english
    } )
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
        
        <form onSubmit={(event) => this.submitHandler(event)}>
          <input type="text" value={this.state.userInput} onChange={this.changeHandler}/>
          <input type="submit" value="Submit"/>
        </form>
        {/* <div>
          <input
            type="text"
            onChange={this.changeHandler}
          />

          <input 
            type="submit"
            onClick={this.submitHandler}
          />
        </div> */}

      </div>
    )
  }
}

const mapStateToProps = state => ( {
  deckWords: state.deckWords
} )

export default connect(mapStateToProps)(QuizCard)
