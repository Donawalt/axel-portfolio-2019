import React from "react"
import Link from 'gatsby-plugin-transition-link'
import TransitionLink from 'gatsby-plugin-transition-link'

class Header extends React.Component {
  render(){
    return (
      <header>
        <div className="logo">
        <TransitionLink
          to="/"
          exit={{
                  length: 1
                }}
          entry={{
                  delay: 0.6
                }}
          >
          <p className="logoSite">AXEL DOS SANTOS //<br/> PORTFOLIO</p>
        </TransitionLink>
        </div>
        <div className="burger">
        <TransitionLink to="/menu">
          <div className="burger-menu">
            <span className="burger-item item1"></span>
            <span className="burger-item item2"></span>
            <span className="burger-item item3"></span>
          </div>
        </TransitionLink>
        </div>
      </header>
    )
  }
}

export default Header
