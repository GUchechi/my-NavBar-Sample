import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuList } from './MenuList'
import './NavBar.css'

const NavBar = () => {
  const [clicked, setClicked] = useState(false)
  const menuList = MenuList.map(({url, title}, index) => {
    return (
      <li key={index}>
        <Link exact to={url} activeClass="active">
          {title}
        </Link>
      </li>
    )
  })

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <nav>
      <div className="logo">
        G-U<font>CHE</font>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
    </nav>
  ) 
}

export default NavBar