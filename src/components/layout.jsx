import * as React from 'react'
import PropTypes from 'prop-types';

import { Container } from '@chakra-ui/react'
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'

import Seo from './seo'
import Header from './header'
import Footer from './footer'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Seo pageTitle={ pageTitle } />

      <SkipNavLink>Skip to content</SkipNavLink>
      <Header />

      <Container maxW="container.md" paddingY={ 5 } marginBottom="12">
        <SkipNavContent />
        { children }
      </Container>

      <Footer />
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired
};