import React from 'react'

import Navigation from '../components/Navigation'

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
        { children }
      <Footer />
    </>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      © Copyright 2022 - B.
    </footer>
  )
}

export default Layout