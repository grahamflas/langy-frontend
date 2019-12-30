import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar ui inverted teal menu">
      <NavLink className="ui button" to="/languages">Languages</NavLink>
    </div>
  )
}

export default NavBar