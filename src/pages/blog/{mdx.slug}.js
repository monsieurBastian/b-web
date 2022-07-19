import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../../components/layout'
import { 
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react'

const BlogPostPage = ({ data }) => {
  return (
    <Layout pageTitle="this is the page title">
      <VStack w="full" h="full" p={ 10 } spacing={ 10 } alignItems="flex-start">

        <Heading as='h1'>
          { data.mdx.frontmatter.title }
        </Heading>
        <Text fontSize='sm'>Posted: { data.mdx.frontmatter.date }</Text>
        <Text fontSize='md'>
          Hello
{/*           <MDXRenderer>
            { data.mdx.body }
          </MDXRenderer> */}
        </Text>

      </VStack>
    </Layout>
  )
}

export const queryPost = graphql`
  query QueryPost($id: String) {
    mdx(
      id: {eq: $id}
    ) {
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        title
      }
      body
      parent {
        ... on File {
          modifiedTime(formatString: "DD MMMM YYYY")
        }
      }
    }
  }
`

export default BlogPostPage