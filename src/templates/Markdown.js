import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'

const Markdown = ({ data }) => {
  const { markdownRemark } = data
  const { featuredImage } = markdownRemark.frontmatter

  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">{ markdownRemark.frontmatter.title }</h1>

      { featuredImage && (
        <Img 
          fluid={ markdownRemark.frontmatter.featuredImage.childImageSharp.fluid } 
          alt="" 
          loading="eager"
          fadeIn="false"
        />
      )}
      <p>{ markdownRemark.frontmatter.description }</p>
      <p>put whatever you want</p>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
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

export default Markdown