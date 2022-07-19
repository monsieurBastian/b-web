import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../../components/layout'
import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react'

const chakraUiComponents = {
  h1: (props) => <Heading as="h1" paddingY="5" size="2xl" { ...props } />,
  h2: (props) => <Heading as="h2" paddingY="5" size="xl" { ...props } />,
  h3: (props) => <Heading as="h3" paddingY="5" size="lg" { ...props } />,
  h4: (props) => <Heading as="h4" paddingY="5" size="md" { ...props } />,
  h5: (props) => <Heading as="h5" paddingY="5" size="sm" { ...props } />,
  h6: (props) => <Heading as="h6" paddingY="5" size="xl" { ...props } />,
  p: (props) => <Text lineHeight={ 2 } paddingBottom="4" fontSize="lg" { ...props } />,
  img: (props) => <Image marginBottom="4" { ...props } />
}

const MarkdownPage = ({ data }) => {
  const { frontmatter, body, timeToRead } = data.mdx

  return (
    <Layout pageTitle="this is the page title">
      <Heading as="h1" size="3xl" paddingBottom="5">
        { frontmatter.title }
      </Heading>

      <Flex justifyContent={ "space-between" }>
        <p>{ timeToRead } min</p>
        <p>{ frontmatter.date }</p>
      </Flex>

      { frontmatter.cover && 
        <Box paddingY="2">
          <Image src={ frontmatter.cover } />
        </Box>
      }

      <Box paddingY="8">
        <MDXProvider components={ chakraUiComponents }>
          <MDXRenderer>
            { body }
          </MDXRenderer>
        </MDXProvider>
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
      body
      slug
      timeToRead
    }
  }
`

export default MarkdownPage