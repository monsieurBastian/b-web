import React from 'react'

import Layout from '../components/Layout'

const Generic = ({ pageContext }) => {
  return (
    <Layout>
      <h1>{ pageContext.title }</h1>
      <p>{ pageContext.description }</p>
      <p>put whatever you want</p>
    </Layout>
  )
}

export default Generic