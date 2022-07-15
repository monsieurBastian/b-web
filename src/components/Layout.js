import React from 'react'
import { Helmet } from 'react-helmet'

import Navigation from './navigation'
import Footer from './footer'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title defer="false">{ pageTitle } | b-web.ch</title>
        <link rel="canonical" href="https://b-web.ch" />
      </Helmet>

      <Navigation />
      { children }
      <Footer />
    </>
  )
}

export default Layout