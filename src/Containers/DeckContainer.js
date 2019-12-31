import React from 'react'
import { BASE_URL } from '../App'
import { connect } from 'react-redux'
import Deck from '../Components/Deck'

class DeckContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      decks: []
    }
  }

  componentDidMount(){
    let data = {language_id: this.props.selectedLanguage.id}

    fetch( `${BASE_URL}/get_decks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }, 
      body: JSON.stringify( data )
    } )
      .then( resp => resp.json() )
      .then( deckArray => this.setState( {
        decks: deckArray
      } ) )
  }

  render(){
    return(
      <div>
        <h1>{this.props.selectedLanguage.name}</h1>
        <div className="deck-container">
          { this.state.decks.map( deckObj => < Deck key={deckObj.category} deckObj={deckObj}/> ) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedLanguage: state.selectedLanguage
})

export default connect(mapStateToProps)(DeckContainer)
