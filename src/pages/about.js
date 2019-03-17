import React from "react"
import Layout from '../components/Layout'

class AboutPage extends React.Component {
  render(){
    return (
      <Layout type="aboutPage">
        <main>
          <section>
            <div className="content-text">
              <p>👋 I'm <strong>Axel Dos Santos</strong></p>
              <p>lorem ipsum dolor sit amet consectur , blablablablabala bala balal bla bala blablabn...</p>
            </div>
            <div className="content-info"></div>
          </section>
          <section>
            
          </section>
        </main>
      </Layout>
    )
  }
}

export default AboutPage
