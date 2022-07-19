import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import Blog from '../../components/blog'
import { Heading } from '@chakra-ui/react'

const BlogPage = ({ data }) => {
  const { blogs } = data.allMdx

  return (
    <Layout pageTitle="My Blog">
      <Heading as='h1'>
        My humble blog Posts
      </Heading>

      { blogs.map(blog => 
        <Blog
          link={ blog.slug } 
          title={ blog.frontmatter.title } 
          date={ blog.frontmatter.date }
          excerpt={ blog.excerpt }
        />
      ) }
    </Layout>
  )
}

export const query = graphql`
  query BlogList {
    allMdx(
      filter: {fileAbsolutePath: { regex : "\/blog/" }}, 
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      blogs: nodes {
        excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        id
        slug
        timeToRead
      }
    }
  }
`

export default BlogPage