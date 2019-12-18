import React from 'react'
import { connect } from 'react-redux'

class StudyCard extends React.Component {

  cardBackwards = () => {}
  
  cardForwards = () => {}

  render(){
    const { deckWords } = this.props
    console.log("deckWords", deckWords)

    let currentCard = 0

    return(
      <div>
        { deckWords.length > 0 ? (
          <div>
            <div className="ui card">
              <h1>{deckWords[currentCard].word_target_language}</h1>
              { deckWords[currentCard].pronunciation ? (<p><em>{deckWords[currentCard].pronunciation}</em></p>) : null }
              <p>{deckWords[currentCard].word_english}</p>
            </div>
  
            <div>
              <button onClick={() => this.cardBackwards(currentCard)}> - </button>
                {currentCard+1} of {deckWords.length}
              <button onClick={() => this.cardForwards(currentCard)}> + </button>
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


 // <div>
      //   {
      //     this.props.deckWords.map( word => { 
      //       return (
      //         <div className="ui card">
      //           <h1>{word.word_target_language}</h1>
      //           { word.pronunciation ? (<p><em>{word.pronunciation}</em></p>) : null }
      //           <p>{word.word_english}</p>
      //         </div>
      //       )
      //     } )
      //   }
      // </div>