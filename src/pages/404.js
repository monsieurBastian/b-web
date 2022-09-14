import * as React from 'react'

import LayoutStoryblok from '../components/layout-storyblok'
import { 
  Heading,
  Text
} from '@chakra-ui/react'

const NotFoundPage = () => {
  return (
    <LayoutStoryblok pageTitle="Home Page">

      <Heading as='h1'>
        Snap! Something is missing here.
      </Heading>

      <Text>It happens sometimes</Text>
    </LayoutStoryblok>
  )
}

export default NotFoundPage