import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../App'
import { setLanguage } from '../Redux/actions'


class Language extends React.Component{
  

  clickHandler = () => {
    this.props.setLanguage(this.props.lang)

    let data = {
      user_id: this.props.currentUser.id, 
      language_id: this.props.lang.id
    }

    fetch( `${BASE_URL}/user_language`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }, 
      body: JSON.stringify( data )
    } )
      .then( resp => resp.json() )
      .then( whoDis => console.log( whoDis ) )
  }

  render(){
    console.log(this.props)
    return(
      <div onClick={this.clickHandler} >
        <Link to={`/decks/${this.props.lang.slug}`}>
          {this.props.lang.name}
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ( {
  setLanguage: (langObj) => { dispatch( setLanguage(langObj) ) }
} )


export default connect(mapStateToProps, mapDispatchToProps)(Language)