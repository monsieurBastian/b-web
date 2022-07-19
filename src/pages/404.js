import * as React from 'react'

import Layout from '../components/layout'
import { 
  Heading,
  Text
} from '@chakra-ui/react'

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Home Page">

      <Heading as='h1'>
        Snap! Something is missing here.
      </Heading>

      <Text>It happens sometimes</Text>
    </Layout>
  )
}

export default NotFoundPage