import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../../components/layout'
import Blog from '../../components/blog'
import { Heading } from '@chakra-ui/react'

const BlogPage = () => {
  return (
    <Layout pageTitle="My Blog">
      <Heading as='h1'>
        My humble blog Posts
      </Heading>

      <Blog
        link={ "/blog" } 
        title="A post title" 
        date="July 19, 2022" 
        excerpt="Hello there!"
      />
      <Blog
        link={ "/blog" } 
        title="A post title" 
        date="July 19, 2022" 
        excerpt="Hello there!"
      />
      <Blog
        link={ "/blog" } 
        title="A post title" 
        date="July 19, 2022" 
        excerpt="Hello there!"
      />
    </Layout>
  )
}

export const queryPosts = graphql`
  query QueryPosts {
    allMdx(
      filter: {fileAbsolutePath: { regex : "\/blog/" }}, 
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        id
        slug
        body
      }
    }
  }
`

export default BlogPage
