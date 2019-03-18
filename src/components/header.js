import React from "react"
import Link from 'gatsby-plugin-transition-link'
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Header extends React.Component {
  render(){
    return (
      <header>
        <div className="logo">
        <AniLink cover direction="right" to="/" bg="black">
          <p className="logoSite">AXEL DOS SANTOS //<br/> PORTFOLIO</p>
        </AniLink>
        </div>
        <div className="burger">
        <AniLink cover direction="right" to="menu" bg="black">
          <div className="burger-menu">
            <span className="burger-item item1"></span>
            <span className="burger-item item2"></span>
            <span className="burger-item item3"></span>
          </div>
        </AniLink>
        </div>
      </header>
    )
  }
}

export default Header
