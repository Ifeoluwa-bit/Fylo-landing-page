import React from 'react'
import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import Input from './Input'
import Button from './Button'

export default function Subscribe() {
  return (
    <Flex
     direction={{base: 'column', md: 'row'}} 
     align={'center'} 
     justify={'center'} 
     gap={{base: '3rem', lg: '12rem'}} 
     backgroundColor={'#545aa7'}
     pt={'8rem'}
     pb={'4rem'}
     px={{base: '9%', md:'7%'} }
    >
      <Box
       w={{base: '100%', md: '60%', lg: '40%'}} 
       color={'#fff'}  
       textAlign={{base: 'center', md: 'start'}}
      >
        <Heading as='h3'fontSize={{base: '1.8rem', lg: '2.2rem'}}>Get early access today</Heading>
        <Text
         mt={'1.5rem'} 
         fontSize={{base: '1.5rem', md: '1.2rem'}} 
        >
          It only takes only a minute to sign up and our free starter tier is extremely gorgeous. If you have any questions, our support team would be happy to help you.
        </Text>
      </Box>

      <Box ml={{base: '0rem', lg:'3rem'}}>
        <Input 
           width={{base: '100%', md: '100%'}} 
           height={{base: '4rem', md: '3rem'}} 
           placeholder={'email@example.com'} 
           borderRadius={'.2rem'}
           borderColor={'#fff'}
           fontSize={{base: '1.7rem', md: '1rem'}}
           color={'#fff'} 
           backgroundColor={'#fff'} 
          />

          <Button
           width={{base: '100%', md: '55%'}} 
           height={{base: '4rem', md: '3rem'}}
           mt={'1rem'} 
           Text={'Get Started for Free'} 
           borderRadius={'.2rem'}
          
          />
      </Box>
    </Flex>
  )
}
