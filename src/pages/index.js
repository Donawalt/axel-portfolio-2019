import React from "react"
import Link from 'gatsby-plugin-transition-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from "gatsby-image"

import { render } from "react-dom";
import Layout from "../components/Layout"

import { graphql } from 'gatsby'


class IndexPage extends React.Component{
render () {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  const posts = get(this, 'props.data.allMarkdownRemark.edges')
  return (
  <Layout type="IndexPage" menuColor="white">
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
            <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
              <h2>{node.frontmatter.type}</h2>
            </Link>
            </div>
            <Link style={{ boxShadow: 'none' }} to={node.fields.slug} className="linkProject">
              <p>Voir le projet</p>
            </Link>
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
export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark (
      limit: 5
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
