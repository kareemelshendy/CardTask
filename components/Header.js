import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header id="header">
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/cards">User</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/">Home</Link>
                </li>

            </ul>
        </nav>
    </header>
  )
}

export default Header