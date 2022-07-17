import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { 
  VStack,
  Heading,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog">
      <VStack w="full" h="full" p={ 10 } spacing={ 10 } alignItems="flex-start">
        <Heading as='h1'>
          My humble blog
        </Heading>

            <UnorderedList spacing={ 3 }>
              {
                data.allFile.nodes.map(node => (
                  <ListItem key={ node.name }>
                    { node.name }
                  </ListItem>
                ))
              }
            </UnorderedList>
            </VStack>
    </Layout>
  )
}

export const queryPosts = graphql`
  query MyQuery {
    allFile(filter: {dir: {eq: "/blog"}}) {
      nodes {
        name
      }
    }
  }
`

export default BlogPage
