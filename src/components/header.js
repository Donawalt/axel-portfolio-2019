import React from "react"
import Link from 'gatsby-link'

class Header extends React.Component {
  render(){
    return (
      <header>
        <div className="logo">
        <Link to="/">
          <p className="logoSite">AXEL DOS SANTOS //<br/> PORTFOLIO</p>
        </Link>
        </div>
        <div className="burger">
        <Link to="/menu">
          <div className="burger-menu">
            <span className="burger-item item1"></span>
            <span className="burger-item item2"></span>
            <span className="burger-item item3"></span>
          </div>
        </Link>
        </div>
      </header>
    )
  }
}

export default Header
