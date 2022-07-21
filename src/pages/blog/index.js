import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import Blog from '../../components/blog'
import PageHeader from '../../components/page-header'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog">
      <PageHeader>
        Readings
      </PageHeader>

      { data.allMdx.nodes.map(node => 
        <>
          <Blog
            link={ node.slug } 
            title={ node.frontmatter.title } 
            date={ node.frontmatter.date }
            excerpt={ node.excerpt }
          />
        </>
      ) }
    </Layout>
  )
}

export const query = graphql`
  query BlogList {
    allMdx(
      filter: {fileAbsolutePath: { regex : "\/blogs/" }}, 
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        excerpt
        frontmatter {
          date
          title
        }
        id
        slug
        timeToRead
        body
      }
    }
  }
`

export default BlogPage