import React from "react"
import Link from 'gatsby-plugin-transition-link'

class Header extends React.Component {
  render(){
    return (
      <footer>
        <div class="lang-div">
          <ul class="lang-list" style={{display: 'none'}}>
            <li class="lang lang-en active" >EN</li>
            <li class="lang lang-fr">FR</li>
          </ul>
        </div>
        <div class="all-div">
          <Link to="/portfolio" >All works</Link>
        </div>
      </footer>
    )
  }
}

export default Header
