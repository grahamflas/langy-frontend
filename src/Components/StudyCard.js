import React from 'react'
import { connect } from 'react-redux'

class StudyCard extends React.Component {

  render(){
    const { deckWords } = this.props

    let currentCard = 0



    return(
      <div>

        <div className="ui card">

        </div>

        <div>
          <button> - </button>
            {currentCard+1} of {deckWords.length}
          <button> + </button>
        </div>

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