import React from "react"
import Link from 'gatsby-plugin-transition-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { render } from "react-dom";
import Layout from "../components/Layout"
import Img from "gatsby-image"

import { graphql } from 'gatsby'


class PortfolioPage extends React.Component{
render () {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  const posts = get(this, 'props.data.allMarkdownRemark.edges')
  return (
  <Layout type="PortfolioPage" menuColor="black">
  <section className="header-blog">
    <h1>Portfolio</h1>
    <h3>by Axel Dos Santos & co ...</h3>
  </section>
  <main>
  {posts.map(({ node }) => {
      const title = get(node, 'frontmatter.title') || node.fields.slug
      return (
        <section key={node.fields.slug} className="fiche">
          <div className="info">
            <Link style={{ boxShadow: 'none' }} to={node.fields.slug} className="LinkArticle">
                <h1 className="titreArticle">
                    {title}
                </h1>
            </Link>
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
