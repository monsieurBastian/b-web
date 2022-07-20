import React from 'react'
import { Link } from 'gatsby'

import { Box, Container } from '@chakra-ui/react'

const Footer = () => {
  return (
    <footer>
      <Box pt={ 4 } pb={ 2 } fontSize='sm'>
        <Container maxW="container.md">
          All right reserved - 2022 - <Link to="/">Bastian</Link>.
        </Container>
      </Box>
    </footer>
  )
}

export default Footer