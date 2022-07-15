import React from 'react'

import Seo from './seo'
import Navigation from './nav-old'
import Footer from './footer'

import { ChakraProvider } from '@chakra-ui/react'
import { Box, Text } from '@chakra-ui/react'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Seo pageTitle={ pageTitle } />
      <ChakraProvider>
        <Navigation />
        <Box p={ 8 }>
          <Text fontSize="xl">
            { children }
          </Text>
        </Box>
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default Layout
