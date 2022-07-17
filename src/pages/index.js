import * as React from 'react'

import Layout from '../components/layout'
import { 
  VStack,
  Heading,
  Text
} from '@chakra-ui/react'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <VStack w="full" h="full" p={ 10 } spacing={ 10 } alignItems="flex-start">
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
      </VStack>
    </Layout>
  )
}

export default IndexPage