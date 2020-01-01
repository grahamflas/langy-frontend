import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const NavBar = (props) => {
  let { currentUser: {username} } = props
  return (

    <div className="navbar ui inverted teal menu">
      <img className="title" src="https://fontmeme.com/permalink/200101/70bec4dea25e2d54162772b3a5f0e3ac.png" alt="black-rose-font" border="0" />
      <NavLink className="ui button" to="/languages">Languages</NavLink>
      <div>{`Welcome, ${username}`}</div>
    </div>
  )
}

const mapStateToProps = state => ( {
  currentUser: state.currentUser
} )
export default connect(mapStateToProps) (NavBar)