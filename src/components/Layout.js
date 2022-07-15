import React from 'react'

import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Seo pageTitle={ pageTitle } />
      <Navigation />
      { children }
      <Footer />
    </>
  )
}

export default Layout