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

  changeMode = (event) => {
    event.persist()

    let clickedMode = event.currentTarget.innerText.toLowerCase()
    let clickedModeID = event.currentTarget.id
    let modeOptions = document.querySelectorAll('.item')

    modeOptions.forEach( mode => {
      if( mode.id === clickedModeID ) {
        mode.classList.remove('active')
        mode.classList.add('active')
      } else {
        mode.classList.remove('active')
      }
    } )

    this.props.history.replace(clickedMode)
  }

  render(){
    let { language } = this.props.match.params
    let capLanguage = language[0].toUpperCase() + language.slice(1)

    return (

      <div className="card-container">
        <div className="mode-container">

          <div className="back-to-decks-btn">
            <i class="arrow alternate circle left outline icon"></i>
            <NavLink to={`/decks/${language}`}>{`Back to ${capLanguage} decks`}</NavLink>
          </div>

          <div className="ui secondary vertical pointing menu mode-menu">
            
            <div id="study-mode" className="item active" onClick={this.changeMode}> 
              Study
            </div>
    
            <div id="drill-mode" className="item" onClick={this.changeMode}>
              Drill
            </div>
    
            <div id="quiz-mode" className="item" onClick={this.changeMode}>
              Quiz
            </div>

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