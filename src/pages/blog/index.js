import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../../components/layout'
import { 
  VStack,
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog">
      <VStack w="full" h="full" p={ 10 } spacing={ 10 } alignItems="flex-start">
        <Heading as='h1'>
          My humble blog Posts
        </Heading>

        <UnorderedList spacing={ 3 } noicon>
          {
            data.allMdx.nodes.map((node) => (
              <ListItem key={ node.id }>
                <Heading as='h2' size='md'>
                  <Link to={ `/blog/${ node.slug }` }>
                    { node.frontmatter.title }
                  </Link>
                </Heading>
                <Text fontSize='sm'>Posted: { node.frontmatter.date } / { node.slug }</Text>
                <Box>
                  <MDXRenderer>
                    { node.body }
                  </MDXRenderer>
                </Box>
              </ListItem>
            ))
          }
        </UnorderedList>
      </VStack>
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
