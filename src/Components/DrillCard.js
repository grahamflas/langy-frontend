import React from 'react'
import { connect } from 'react-redux'
import { BASE_URL } from '../App'
import DrillChoice from './DrillChoice'
import ProgressBar from './ProgressBar'

class DrillCard extends React.Component{
  constructor(){
    super()
    this.state={
      currentCard: 0, 
      correctAnswer: "",
      wordBank: []
    }
  }

  componentDidMount(){
    const { currentCard } = this.state

    this.setState( {
      correctAnswer: this.props.deckWords[currentCard].word_english
    }, () => this.getWrongWords() )
  }

  nextCard( state ){
    console.log("inside nextCard()")
    let nextCard = ( state.currentCard >= this.props.deckWords.length-1 ) ? ( 0 ) : ( state.currentCard + 1 )

    this.setState( {
      currentCard: nextCard,
      correctAnswer: this.props.deckWords[nextCard].word_english
    }, () => this.getWrongWords() )
  }

  getWrongWords(){
    let data = {
      languageID: this.props.languageID,
      deckID: this.props.deckID,
      correctAnswer: this.state.correctAnswer
    }

    fetch( `${BASE_URL}/get_wrong_words`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }, 
      body: JSON.stringify( data )
    } )
      .then( resp => resp.json() )
      .then( wordsArray => this.randomizeOrder( wordsArray ) )
  }

  randomizeOrder( wordsArray ) {
    let randomized = []

    while ( wordsArray.length > 0 ) {
      let i = Math.floor( Math.random() * (wordsArray.length) )
      randomized.push( wordsArray.splice(i, 1)[0] )
    }

    this.setState( { wordBank: randomized } )
  }


  render(){
    const { deckWords } = this.props
    const {currentCard} = this.state
    return(
    <div>
        {/* <ProgressBar currentCardDisplay={currentCard + 1} deckLength={deckWords.length}/> */}

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
          <div className="drill-choice-container">
            {
              this.state.wordBank.map( word => (
                <DrillChoice
                  key={word} 
                  word={word}
                  correctAnswer={this.state.correctAnswer}
                  closeModal={ () => this.nextCard(this.state) }
                />
              ) )
            }
          </div>
        </div>

    </div>
    )
  }

}

const mapStateToProps = state => ({
  deckWords: state.deckWords,
  languageID: state.selectedLanguage.id,
  deckID: state.selectedDeck.id
})

export default  connect(mapStateToProps)(DrillCard)