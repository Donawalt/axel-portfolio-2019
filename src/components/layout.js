import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Helmet from 'react-Helmet'

import '../style/main.scss'

class Layout extends React.Component{
  constructor(props){
    super(props);
    var html = document.querySelector('html');
    html.className ='';
    html.classList.add(this.props.type);
    html.classList.add(this.props.menuColor);
  }

  render () {
    return (
      <div>
      <Helmet>
      <meta name="description" content=""></meta>
      <meta name="language" content="fr"></meta>
      </Helmet>
      <Header/>
      <section className="app">
        {this.props.children}
      </section>
      <Footer/>
      </div>
    )
  }
}

export default Layout
