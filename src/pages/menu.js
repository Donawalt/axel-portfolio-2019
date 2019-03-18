import React from "react"
import Link from 'gatsby-plugin-transition-link'
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"


import "../style/main.scss"

const Menu = () => (
  <section className="menu-page">
    <div>
      <h1>MENU</h1>
    </div>
    <div>
      <ul>
        <li><AniLink paintDrip to="/portfolio" color="white">PORTFOLIO</AniLink></li>
        <li><AniLink paintDrip to="/blog" color="white">BLOG</AniLink></li>
        <li><AniLink paintDrip to="/about" color="white">ABOUT</AniLink></li>
      </ul>
    </div>
  </section>
)

export default Menu
