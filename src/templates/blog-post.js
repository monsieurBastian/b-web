import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'

const BlogPage = ({ data }) => {
  const { markdownRemark } = data
  const { featuredImage } = markdownRemark.frontmatter

  return (
    <Layout>
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={ node.name }>
              { node.name }
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const queryPosts = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

/* export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        slug
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
 */
export default BlogPage
