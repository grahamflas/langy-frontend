import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../App'


class Language extends React.Component{
  

  clickHandler = () => {
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
    return(
      <div onClick={this.clickHandler}>
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

export default connect(mapStateToProps)(Language)