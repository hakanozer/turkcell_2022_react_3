import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <NavLink to='/'>Login</NavLink> | <NavLink to='/dashboard'>Dashboard</NavLink> | <NavLink to='/settings'>Settings</NavLink>
    </>
  )
}

export default NavBar