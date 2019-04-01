import React from "react"
import Link from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { render } from "react-dom";
import Layout from "../components/layout"
import Img from "gatsby-image"

import { graphql } from 'gatsby'


class PortfolioPage extends React.Component{
render () {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  const posts = get(this, 'props.data.allMarkdownRemark.edges')
  return (
  <Layout type="PortfolioPage" menuColor="black">
  <Helmet>
    <title>{siteTitle} || PORTFOLIO</title>
  </Helmet>
  <section className="header-blog">
    <h1>Réalisations</h1>
    <h3>by Axel Dos Santos & co ...</h3>
  </section>
  <main>
  {posts.map(({ node }) => {
      const title = get(node, 'frontmatter.title') || node.fields.slug
      return (
        <section key={node.fields.slug} className="fiche">
          <div className="info">
            <AniLink paintDrip color="white" style={{ boxShadow: 'none' }} to={node.fields.slug} className="LinkArticle">
                <h1 className="titreArticle">
                    {title}
                </h1>
            </AniLink>
            </div>
            <div className="background">
              <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
            </div>
        </section>
      )
    })}
  </main>
  </Layout>
)
}
}
export default PortfolioPage

export const pageQuery = graphql`
  query PortfolioQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "portfolio-post" } }}
    ){
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            type
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
    }
  }
`
