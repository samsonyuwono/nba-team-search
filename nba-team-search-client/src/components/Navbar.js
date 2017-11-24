import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#B6B6B4',
  textDecoration: 'none',
  color: 'white',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
}

const Navbar = () =>
  <div className='navbar'>
    <NavLink
    to='/'
    exact
    style={link}
    activeStyle={{
      background: '#D1D0CE'
    }}>Home</NavLink>
    <NavLink
    to='/Teams'
    exact
    style={link}
    activeStyle={{
      background: '#D1D0CE'
    }}>Teams</NavLink>
    <NavLink
    to='/schedule'
    exact
    style={link}
    activeStyle={{
      background: '#D1D0CE'
    }}>Schedule</NavLink>
    <NavLink
    to='/standings'
    exact
    style={link}
    activeStyle={{
    background: '#D1D0CE'
  }}>Standings</NavLink>
  </div>

export default Navbar
