import React from 'react'
import { Flex, Image, Box, Heading, Text, Spacer, Link as ChakraLink } from '@chakra-ui/react'
import productiveImg from '../images/illustration-2.svg'
import iconQuotes from '../images/icon-quotes.svg'
import testimonialImg from '../images/avatar-testimonial.jpg'

export default function Productive() {
  return (
    <Flex
    className='productive'
    px={'7%'} 
    py={{base: '7rem', md: '12rem'}}
    direction={{base: 'column-reverse', md: 'row'}} 
    justify={'center'} 
    align={'center'}
    gap={{base: '1rem', md: '1rem'}}
    backgroundColor={'#eee'}
    mt={{base: '5rem', md: '2rem'}}
   >

     <Box
      w={{base: '100%', md: '80%'}} 
      textAlign={{base: 'center', md: 'start'}}
      mt={{base: '2rem'}}
     >
       
       <Heading as='h2'
        fontSize={{base:'1.2rem', md: '2.2rem', lg: '2.2rem'}} 
        color={'#0b0b45'} 
        lineHeight={'1.5'} 
        mt={{base: '2rem'}}
       >
         Stay productive, wherever you are.
       </Heading>

       <Text
        fontSize={{base: '1.4rem', md: '1rem',  lg: 'xl'}} 
        color={{base: '#666', md: '#000'}} my={'1rem'}
        fontWeight={'400'} 
       >
         Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
        </Text>
         
        <Text
        fontSize={{base: '1.4rem', md: '1rem',  lg: 'xl'}} 
        color={{base: '#666', md: '#000'}} my={'1rem'}
        fontWeight={'400'} 
       >
         Securely share files an folders with friends, family and colleagues for live collaboration No email attachments required!
       </Text>

       <ChakraLink
        textDecoration={'underline'} 
        color={'teal'}
        fontSize={'1.5rem'} 
        >
          See how Fylo works. 
      </ChakraLink>

      <Box
       backgroundColor={'#fff'} 
       w={{ base: '100%', md: '70%'}} 
       mt={'2rem'}
       p={'2rem'}
       borderRadius={'0.5rem'}
      >

        <Image
         src={iconQuotes} 
         alt="icon-quotes"
        >
        </Image>

        <Text
         mt={'1rem'} 
         textAlign={{base:'start'}} 
         lineHeight={'1.5'}
        >
          Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. 
        </Text>

        <Flex
         align={'center'} 
         gap={'1rem'} 
         mt={'1.5rem'}
        >

          <Image
           w={'4rem'} 
           h={'4rem'}
           lineHeight={'4rem'}
           borderRadius={'100%'} 
           objectFit={'cover'} 
           src={testimonialImg} 
           alt="testimonial-Image">
          </Image>

          <Box>

            <Heading as ='h6'
             fontSize={'1rem'} 
             letterSpacing={'0.05rem'}
            >
              Kyle Burton
            </Heading>

            <Text
             fontSize={'.7rem'} 
             mt={'.3rem'}
            >
              Founder, & CEO, Huddle
            </Text>

          </Box>

        </Flex>

      </Box>

     </Box>

     <Spacer />

     <Image
      w={{base: '100%', md: '46%'}} 
      objectFit={'cover'} src={productiveImg} 
      alt="Hero-Image" 
     >
     </Image>

   </Flex>
  )
}
