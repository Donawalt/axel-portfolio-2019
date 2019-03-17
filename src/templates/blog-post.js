import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Img from 'gatsby-image'

import { graphql } from 'gatsby'

import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pageContext

    return (
      <Layout type="blogArticle" menuColor="black">
      <div className="BlogPost" id="BlogPost">
        <Helmet>
          <title>{post.frontmatter.title} || Axel Dos Santos</title>
        </Helmet>
        <section className="header-section">
            <h1>{post.frontmatter.title}</h1>
            <div className="info">
              <div className="avatar"></div>
              <div className="publi">
                <p>{post.frontmatter.author}</p>
                <p>
                  {post.frontmatter.date}
                </p>
              </div>
            </div>
        </section>
        <section className="featuredImg-section">
        </section>
        <section id="aPost" dangerouslySetInnerHTML={{ __html: post.html }} ></section>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
        author
      }
    }
  }
`
