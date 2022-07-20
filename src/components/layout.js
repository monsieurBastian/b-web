import * as React from 'react'
import { ChakraProvider, Container, Flex } from '@chakra-ui/react'
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'

import theme from '../theme/new-fonts'
import Seo from './seo'
import Header from './header'
import Footer from './footer'

const Layout = ({ pageTitle, children }) => {
  return (
    <ChakraProvider theme={ theme }>
      <Seo pageTitle={ pageTitle } />
      <SkipNavLink>Skip to content</SkipNavLink>

      <Container display='flex' minH='100vh' flexDirection='column' minW='100vw' p={ 0 }>
        <Header />

        <Container maxW="container.md" p={ 3 } flex='1' >
          <SkipNavContent />
          { children }
        </Container>

        <Footer />
      </Container>
    </ChakraProvider>
  )
}

export default Layout