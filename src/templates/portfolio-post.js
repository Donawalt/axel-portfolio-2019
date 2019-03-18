import React from 'react'
import Helmet from 'react-helmet'

import get from 'lodash/get'

import Img from 'gatsby-image'

import { graphql } from 'gatsby'

import Layout from '../components/layout'

class PortfolioPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout type="portfolioArticle" menuColor="white">
      <div className="PortfolioPost" id="PortfolioPost">
        <Helmet>
          <title>{post.frontmatter.title} || {siteTitle}</title>
        </Helmet>
        <div className="headerArticle">
            <div className="titleArticle">
              <h1>{post.frontmatter.title}</h1>
              <h2>{post.frontmatter.type}</h2>
            </div>
            <div className="background">
              <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
            </div>
        </div>
        <section className="content">
          <section className="intro">
            <h3 className="intitule">PRESENTATION</h3>
            <div className="resume">{post.frontmatter.description}</div>
          </section>
          <section id="aPost" dangerouslySetInnerHTML={{ __html: post.html }} />
          <section className="detail_tab">
            <ul>
              <li>
                <h3 className="intitule">PROJET:</h3>
                <p>{post.frontmatter.title}</p>
              </li>
              <li>
                <h3 className="intitule">RÔLE:</h3>
                <p>{post.frontmatter.role}</p>
              </li>
              <li>
                <h3 className="intitule">CREDIT:</h3>
                <p>{post.frontmatter.credit}</p>
              </li>
            </ul>
          </section>
        </section>
      </div>
</Layout>
    )
  }
}

export default PortfolioPostTemplate

export const pageQuery = graphql`
  query PortfolioPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        role
        credit
        type
        description
        featuredImage {
            childImageSharp{
                sizes(maxWidth: 40000) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
      }
    }
  }
`
