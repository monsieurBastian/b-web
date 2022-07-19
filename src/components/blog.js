import * as React from 'react'
import { Link } from 'gatsby'

import { Box, Heading, Text } from '@chakra-ui/react'

const Blog = ({ link, title, date, excerpt }) => {
  return (
    <Link to={ link }>
      <Box paddingY="4">
        <Heading as="h2">
          { title }
        </Heading>
        <Text>
          { date }
        </Text>

        <Text>
          { excerpt }
        </Text>
      </Box>
    </Link>
  )
}

export default Blog