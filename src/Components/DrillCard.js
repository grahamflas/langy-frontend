import React from 'react'
import { connect } from 'react-redux'
import { BASE_URL } from '../App'

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
    let nextCard = ( state.currentCard >= this.props.deckWords.length-1 ) ? ( 0 ) : ( state.currentCard + 1 )

    this.setState( {
      currentCard: nextCard,
      correctAnswer: this.props.deckWords[nextCard].word_english
    }, () => this.getWrongWords() )
  }

  getWrongWords(){
    console.log( "inside getWrongWords. State:", this.state )

    let { languageID, deckID } = this.props
    let { correctAnswer } = this.state

    let data = {
      languageID: languageID,
      deckID: deckID,
      correctAnswer: correctAnswer
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
      .then( wordBank => this.setState( { wordBank: wordBank } ) )
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
          {
            this.state.wordBank.map( word => <p>{word}</p> )
          }
        </div>
  
        <button 
          className="button-container"
          onClick={ () => this.nextCard(this.state)} 
        >
          Next Card
        </button>
    </div>
    )
  }

}

const mapStateToProps = state => ({
  deckWords: state.deckWords,
  languageID: state.selectedLanguage.id,
  deckID: state.selectedDeck.id
})

export default  connect(mapStateToProps ) (DrillCard)