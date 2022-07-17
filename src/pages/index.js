import React from 'react'

import Nav from '../components/main-navigation'

import { 
  SkipNavLink, 
  SkipNavContent 
} from '@chakra-ui/skip-nav'
import { 
  ChakraProvider,
  Container,
  Flex,
  VStack,
  Box, 
  Heading,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

const IndexPage = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");

  return (
    <ChakraProvider bgGradient='linear(to-br, gray.100, teal.50)'>
      <SkipNavLink>Skip to content</SkipNavLink>
      <Nav />
      
      <Container maxW="container.md" p={ 5 }>
        <Flex h="100vh" py={ 5 }>

          <VStack w="full" h="full" p={ 10 } spacing={ 10 } alignItems="flex-start">
            <SkipNavContent />
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
        </Flex>
      </Container>
    </ChakraProvider>
  )
}

export default IndexPage