import React from 'react'
import { BASE_URL } from '../App'
import { connect } from 'react-redux'
import { setDeckWords } from '../Redux/actions'
import { Route, withRouter, NavLink } from 'react-router-dom'
import StudyCard from '../Components/StudyCard'
import DrillCard from '../Components/DrillCard'
import QuizCard from '../Components/QuizCard'

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
    let { language, category } = this.props.match.params
    return (
      <div className="card-container">
        <div className="mode-container">
          <div className="back-to-decks-btn">
            <NavLink to={`/decks/${language}`}>Back to decks</NavLink>
          </div>
          <div className="mode-button"> 
           <NavLink to={`/decks/${language}/${category}/study`}>Study</NavLink>
          </div>
  
          <div className="mode-button">
            <NavLink to={`/decks/${language}/${category}/drill`}>Drill</NavLink>
          </div>
  
          <div className="mode-button">
            <NavLink to={`/decks/${language}/${category}/quiz`}>Quiz</NavLink>
          </div>
        </div>

        <div>
          <Route exact path="/decks/:language/:category/study" component={StudyCard}/>
          <Route exact path="/decks/:language/:category/drill" component={DrillCard}/>
          <Route exact path="/decks/:language/:category/quiz" component={QuizCard}/> 
        </div>

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

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(CardContainer))