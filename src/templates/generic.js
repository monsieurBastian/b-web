import React from 'react'

import Layout from '../components/layout'

const Generic = ({ pageContext }) => {
  return (
    <Layout>
      <h1>{ pageContext.title }</h1>
      <p>{ pageContext.description }</p>
      <p>this is some generic content</p>
    </Layout>
  )
}

export default Generic
