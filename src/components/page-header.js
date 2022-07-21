import * as React from 'react'

import { Heading } from '@chakra-ui/react'

const PageHeader = ({ children }) => {
  return (
    <Heading 
      as='h1'
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      bgClip='text'
      fontSize={['3xl', '4xl', '5xl']}
      py={ 4 }
    >
      { children }
    </Heading>
  )
}

export default PageHeader