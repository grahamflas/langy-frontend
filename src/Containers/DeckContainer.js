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
    console.log(data)

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
        { this.state.decks.map( deckObj => < Deck deckObj={deckObj}/> ) }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedLanguage: state.selectedLanguage
})

export default connect(mapStateToProps)(DeckContainer)
