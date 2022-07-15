import React from 'react'
import { useState } from 'react'

import {
  Box, Flex, Text, Link, Button,
  useDisclosure, useColorModeValue, useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const MenuItem = ({ children, isLast, to = '/' }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      p={ 2 }
      display="flex"
      alignItems="center"
      rounded={ 'md' }
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      <Link
        rounded={ 'md' }
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={ to }>
        { children }
      </Link>
    </Text>
  )
}

const Nav = ( props ) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Box 
      bg={ useColorModeValue('gray.100', 'gray.900') } 
      px={ 4} 
    >
      <Flex 
        mb={ 8 }
        p={ 4 }
        w="100%"
        as="nav"
        alignItems={ 'center' } 
        justifyContent={ 'space-between' }
        wrap="wrap"
      >
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            <Link 
              href='/'
              _hover={{ textDecoration:'none' }}
            >
              Bastian
            </Link>
          </Text>
        </Box>

        <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
          {show ? <CloseIcon /> : <HamburgerIcon />}
        </Box>

        <Box
          display={{ base: show ? 'block' : 'none', md: 'block' }}
          flexBasis={{ base: '100%', md: 'auto' }}
          alignItems="stretch"
        >
          <Flex
            align="stretch"
            justify={['center', 'space-between', 'flex-end', 'flex-end']}
            direction={['column', 'row', 'row', 'row']}
            pt={[4, 4, 0, 0]}
          >
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="#blog">Blog</MenuItem>
            <MenuItem to="#about">About</MenuItem>
            <MenuItem to="#contact">Contact</MenuItem>

            <Button onClick={ toggleColorMode } isLast>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Nav