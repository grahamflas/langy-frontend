import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../App'
import { setLanguage, setUserWords } from '../Redux/actions'


class Language extends React.Component{
  

  clickHandler = () => {
    this.props.setLanguage(this.props.lang)

    let data = {
      user_id: this.props.currentUser.id, 
      language_id: this.props.lang.id
    }

    fetch( `${BASE_URL}/get_words`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }, 
      body: JSON.stringify( data )
    } )
      .then( resp => resp.json() )
      .then( wordsArray => this.props.setUserWords( wordsArray ) )
  }

  render(){
    return(
      <div className="language-card" onClick={this.clickHandler} >
       <div className="language-name">
          <Link className="language-link" to={`/decks/${this.props.lang.slug}`}>
            {this.props.lang.name}
          </Link>
       </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ( {
  setLanguage: (langObj) => { dispatch( setLanguage(langObj) ) }, 
  setUserWords: (wordsArray) => { dispatch( setUserWords( wordsArray ) ) }
} )


export default connect(mapStateToProps, mapDispatchToProps)(Language)