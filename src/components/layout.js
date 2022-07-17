import * as React from 'react'

import Seo from './seo'
import Nav from '../components/main-navigation'

import { 
  ChakraProvider,
  Container,
  Flex
} from '@chakra-ui/react'
import {
  SkipNavLink,
  SkipNavContent,
} from '@chakra-ui/skip-nav'


const Layout = ({ pageTitle, children }) => {
  return (
    <ChakraProvider bgGradient='linear(to-br, gray.100, teal.50)'>
      <SkipNavLink>Skip to content</SkipNavLink>
      <Seo pageTitle={ pageTitle } />
      
      <Nav />

      <Container maxW="container.md" p={ 5 }>
        <Flex h="100vh" py={ 5 }>
          <SkipNavContent />
          { children }
        </Flex>
      </Container>
    </ChakraProvider>
  )
}

export default Layout