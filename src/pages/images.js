import React from 'react'
import { graphql } from 'gatsby'

import galaxyInSpace from '../images/javier-miranda-6Pou6SeJ6cY-unsplash.jpg'

const Images = ({ data }) => {
  return (
    <div>
      <h1>Ways of adding images</h1>

      <h2>basic way by just importing the image from the folder</h2>
      <img src={ galaxyInSpace } alt="3D rendered galaxy" style={{ maxWidth: 800 }}/>

      <h2 class={{ paddingTop: 100 }}>with graphql</h2>
      <img src={ data.file.publicURL } alt="a planet" style={{ maxWidth: 800 }} />
      
      <p style={{ marginTop: 200 }}>Photos by <a href="https://unsplash.com/@nuvaproductions">Javier Miranda</a> on <a href="https://unsplash.com">Unsplash</a></p>
      
    </div>
  )
}

export const imagesQuery = graphql`
  query ImagesQuery {
    file(relativePath: {eq: "javier-miranda-b_fob3Te8Uk-unsplash.jpg"}) {
      publicURL
    }
  }
`

export default Images