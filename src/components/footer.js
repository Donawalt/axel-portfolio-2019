import React from "react"
import Link from 'gatsby-plugin-transition-link'

class Header extends React.Component {
  render(){
    return (
      <footer>
        <div class="contact-div">
          <ul class="contact-list" style={{
            display: 'flex',
            color: 'white',
            listStyleType: 'none',
            fontFamily: 'sans-serif'
          }}>
            <li class="" ><a href="">Mail</a></li>
            <li class="" style={{
              marginLeft: '5px'
            }}><a href="https://www.instagram.com/axe2santos/" target="_blanck">Instagram</a></li>
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
