import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const NavBar = (props) => {
  let { currentUser: {username} } = props
  return (
    <div className="navbar ui inverted teal menu">
      <NavLink className="ui button" to="/languages">Languages</NavLink>
  <div>{`Welcome, ${username}`}</div>
    </div>
  )
}

const mapStateToProps = state => ( {
  currentUser: state.currentUser
} )
export default connect(mapStateToProps) (NavBar)