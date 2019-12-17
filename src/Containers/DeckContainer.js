import React from 'react'
import { BASE_URL } from '../App'
import { connect } from 'react-redux'

class DeckContainer extends React.Component {

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
      .then( whoDis => console.log(whoDis) )
  }

  render(){
    return(
      <div>
        Deck Container
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedLanguage: state.selectedLanguage
})

export default connect(mapStateToProps)(DeckContainer)
