import React from 'react'
import { graphql } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

import galaxyInSpace from '../images/javier-miranda-6Pou6SeJ6cY-unsplash.jpg'

const Images = ({ data }) => {

  const image = getImage( data.file )
  return (
    <div>
      <h1>Adding images</h1>

      <img 
        src={ galaxyInSpace } 
        alt="3D rendered galaxy" 
        style={{ maxWidth: 800 }}
      />
      
      <h2 class={{ paddingTop: 100 }}>with Gatsby Plugin Image</h2>
      <StaticImage
        src="../images/javier-miranda-6Pou6SeJ6cY-unsplash.jpg"
        alt="a galaxy"
        placeholder="blurred"
      />
      <GatsbyImage
        image={ image }
        alt="a galaxy"
      />

      <p style={{ marginTop: 200 }}>Photos by <a href="https://unsplash.com/@nuvaproductions">Javier Miranda</a> on <a href="https://unsplash.com">Unsplash</a></p>
      
    </div>
  )
}


export const imageQuery = graphql`
  query ImageQuery {
    file(relativePath: {eq: "javier-miranda-OiiVv1iiB0A-unsplash.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          width: 600
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default Images