import * as React from 'react'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { storyblokEditable } from 'gatsby-source-storyblok'

const SplitWithImage = ({ blok }) => {
  return (
    <Container maxW={ '5xl' } py={ 12 } { ...storyblokEditable(blok) } key={ blok._uid }>
      <SimpleGrid columns={ { base: 1, md: 2 } } spacing={ 10 }>
        <Stack spacing={ 4 }>
          <Text
            textTransform={ 'uppercase' }
            color={ 'blue.400' }
            fontWeight={ 600 }
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            { blok.tag }
          </Text>
          <Heading>{ blok.headline }</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            { blok.text }
          </Text>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

export default SplitWithImage