import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import { 
  Box,
  Heading,
  Text
} from '@chakra-ui/react'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">

      <Heading as='h1'>
        Home of Bastian, Frontend Designer and Developer
      </Heading>

      <Text>Hey, I am Bastian and I am</Text>
      <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='4xl'
        fontWeight='extrabold'>
        A Frontend and Multimedia Design Team Lead at SCOTT Sports, crafting web experiences and help bridging the gap between Marketing and Developers.
      </Text>

      <Box>
        <StaticImage
          alt="some ramdom unsplash stuff"
          src="../images/javier-miranda-b_fob3Te8Uk-unsplash.jpg"
        />
      </Box>
    </Layout>
  )
}

export default IndexPage