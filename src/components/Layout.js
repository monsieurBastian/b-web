import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        { children }
      </div>
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