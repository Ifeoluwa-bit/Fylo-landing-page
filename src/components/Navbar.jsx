import React from 'react'
import { Flex, Image, Link as ChakraLink, Box } from '@chakra-ui/react'
import logo from '../images/logo.svg';

export default function Navbar() {
  return (
    <Flex
     px={'7%'} 
     py={{base: '1rem', md: '0rem'}}
     justify={'space-between'} 
     align={'center'} >
      <Image
       boxSize={{base: '5rem', sm: '8rem', md: '12rem' }} 
       objectFit={'contain'} 
       src={logo} alt='logo'>

      </Image>

      <Box
       color={'#666'} 
       fontSize={{base: '0.7rem', sm: '1.2rem', md: '1.5rem'}} 
       fontWeight={'400'} 
       textAlign={'center'} 
      >
        
        <ChakraLink mr={{base: '1.2rem', sm: '2rem', md:'2.5rem'}}>Features</ChakraLink>
        <ChakraLink mr={{base: '1.2rem', sm: '2rem', md:'2.5rem'}}>Team</ChakraLink>
        <ChakraLink textDecoration={'none'}>Sign In</ChakraLink>
      
      </Box>
    </Flex>
  )
}
