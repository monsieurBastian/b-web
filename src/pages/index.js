import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title defer={ false }>b-web</title>
        <link rel="canonical" href="https://b-web.ch" />
      </Helmet>

      <Layout>
        <section className="hero is-medium">
          <div className="hero-body">
            <p className="subtitle">
              Hey, I am Bastian and I am
            </p>
            <p className="title">
              A Frontend and Multimedia Design Team Lead at SCOTT Sports, crafting web experiences and help bridging the gap between Marketing and Developers.
              </p>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default IndexPage