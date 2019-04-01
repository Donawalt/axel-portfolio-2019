import React from "react"
import Loader from '../components/loader'
import Link from 'gatsby-plugin-transition-link'
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from "gatsby-image"

import { render } from "react-dom";
import Layout from "../components/layout"

import { graphql } from 'gatsby'


class IndexPage extends React.Component{
render () {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  const posts = get(this, 'props.data.allMarkdownRemark.edges')
  return (
  <Layout type="IndexPage" menuColor="white">
    <Helmet>
      <title>{siteTitle} || Portfolio</title>
    </Helmet>
    <Loader/>
  <main>
  {posts.map(({ node }) => {
      const title = get(node, 'frontmatter.title') || node.fields.slug
      return (
        <section key={node.fields.slug} className="fiche">
          <div className="info">
            <AniLink cover direction="down" bg="white" to={node.fields.slug} className="LinkArticle">
                <h1 className="titreArticle">
                    {title}
                </h1>
            </AniLink>
            <AniLink cover direction="down" bg="white" to={node.fields.slug}>
              <h2>{node.frontmatter.type}</h2>
            </AniLink>
            </div>
            <AniLink cover direction="left"  bg="white" to={node.fields.slug} className="linkProject">
              <p>Voir le projet</p>
            </AniLink>
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
