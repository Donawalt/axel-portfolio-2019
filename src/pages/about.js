import React from "react"
import Layout from '../components/layout'
import profile from '../images/profileAxel.jpg'

class AboutPage extends React.Component {
  render(){
    return (
      <Layout type="aboutPage">
        <main>
          <section className="left">
            <div className="content-text">
              <p>👋 I'm <strong>Axel Dos Santos</strong></p>
              <p>lorem ipsum dolor sit amet consectur , blablablablabala bala balal bla bala blablabn...</p>
            </div>
            <div className="content-info"></div>
          </section>
          <section className="right">
            <div className="profile">
              <img src={profile} alt="photodeprofile"/>
            </div>
            <div className="background"></div>
          </section>
        </main>
      </Layout>
    )
  }
}

export default AboutPage
