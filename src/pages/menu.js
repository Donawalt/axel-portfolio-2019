import React from "react"
import Link from "gatsby-link"

import "../style/main.scss"

const Menu = () => (
  <section className="menu-page">
    <div>
      <h1>MENU</h1>
    </div>
    <div>
      <ul>
        <li><Link to="/portfolio">PORTFOLIO</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="">ABOUT</Link></li>
      </ul>
    </div>
  </section>
)

export default Menu
