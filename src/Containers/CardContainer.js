import React from 'react'
import { BASE_URL } from '../App'
import { connect } from 'react-redux'
import { setDeckWords } from '../Redux/actions'

class CardContainer extends React.Component{

  componentDidMount(){
    let data = {
      language_id: this.props.selectedLanguageId,
      deck_id: this.props.selectedDeckId
    }
    
    fetch( `${BASE_URL}/get_deck_words`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }, 
      body: JSON.stringify( data )
    } )
      .then( resp => resp.json() )
      .then( wordsArray => this.props.setDeckWords( wordsArray ) )
  }
  render(){
    return (
      <div>
        In CardContainer
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedLanguageId: state.selectedLanguage.id,
  selectedDeckId: state.selectedDeck.id
})

const mapDispatchToProps = dispatch => ( {
  setDeckWords: (wordsArray) => { dispatch( setDeckWords( wordsArray ) ) }
} )
export default connect(mapStateToProps, mapDispatchToProps) (CardContainer)