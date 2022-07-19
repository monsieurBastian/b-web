import React from 'react'
import { Link } from 'gatsby'

import { Box, Container } from '@chakra-ui/react'

const Footer = () => {
  return (
    <footer>
      <Box paddingY={ 2 }>
        <Container maxW="container.md">
          All right reserved - 2022 - <Link to="/">Bastian</Link>.
        </Container>
      </Box>
    </footer>
  )
}

export default Footer