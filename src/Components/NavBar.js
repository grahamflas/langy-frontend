import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const NavBar = (props) => {
  let { currentUser: {username} } = props
  return (

    <div className="navbar ui secondary pointing menu">
      <img className="title" src="https://fontmeme.com/permalink/200101/70bec4dea25e2d54162772b3a5f0e3ac.png" alt="black-rose-font" border="0" />
      <NavLink className="ui inverted basic button nav-button" to="/languages">Languages</NavLink>
      {/* <div className="">{`Welcome, ${username}`}</div> */}
      <div className="right menu ui inverted basic button nav-button">Logout</div>
    </div>
  )
}

const mapStateToProps = state => ( {
  currentUser: state.currentUser
} )
export default connect(mapStateToProps) (NavBar)