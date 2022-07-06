import React from 'react'
import { Flex, Image, Box, Heading, Text, Spacer } from '@chakra-ui/react'
import heroImg from '../images/illustration-1.svg'
import Input from './Input'
import Button from './Button'

export default function Hero() {
  return (
    <Flex
     px={'7%'} 
     py={{base: '1rem', md: '0rem'}}
     direction={{base: 'column-reverse', md: 'row'}} 
     justify={'center'} 
     align={'center'}
     gap={{base: '0rem', md: '1rem'}}
    >

      <Box
       w={{base: '100%', md: '80%'}} 
       textAlign={{base: 'center', md: 'start'}}
      >
        
        <Heading as='h2'
         fontSize={{base:'3xl', md: '2.2rem', lg: '2rem', xl: '2.5rem'}} 
         color={'#0b0b45'} 
         lineHeight={'1.5'} 
         mt={{base: '2rem'}}
        >
          All your files in one secure location, accesible anywhere.
        </Heading>

        <Text
         fontSize={{base: '1.5rem', md: 'lg', lg: 'xl'}} 
         color={'#000'}
         fontWeight={'400'} 
         mt={'1rem'} 
        >
          Flyo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.
        </Text>

        <Flex
         direction={{base: 'column', md: 'row'}} 
         align={'center'} 
         justify={{base:'center', md:'start'}} 
         gap={{base: '1.5rem', md: '1rem'}} 
         my={'2rem'}
        >

          <Input
           width={{base: '100%', md: '55%'}} 
           height={{base: '4rem', md: '3rem'}} 
           placeholder={'Enter your email...'} 
           borderRadius={'.2rem'}
           borderColor={'#000'}
           fontSize={{base: '1.7rem', md: '1rem'}}
           color={'#444'}  
          />

          <Button
           width={{base: '100%', md: '35%'}} 
           height={{base: '4rem', md: '3rem'}} 
           Text={'Get Started'} 
           borderRadius={'.2rem'}
          />

        </Flex>

      </Box>

      <Spacer />

      <Image
       w={{base: '100%', md: '48%'}} 
       objectFit={'cover'} src={heroImg} 
       alt="Hero-Image" 
       mt={{base: '3rem'}}
      >
      </Image>

    </Flex>
  )
}
