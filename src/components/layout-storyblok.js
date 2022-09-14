import * as React from 'react'
import PropTypes from 'prop-types'

import { ChakraProvider, Container } from '@chakra-ui/react'
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'
import { storyblokInit, apiPlugin } from 'gatsby-source-storyblok'

import theme from '../theme/new-fonts'
import Seo from './seo'
import Header from './header'
import Footer from './footer'
import BlokTeaser from './blok-teaser'

storyblokInit({
  accessToken: process.env.GATSBY_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    teaser: BlokTeaser
  }
});

const LayoutStoryblok = ({ pageTitle, children }) => {
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

LayoutStoryblok.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutStoryblok