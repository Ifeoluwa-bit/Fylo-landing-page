import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import logo from '../images/logo.svg';
import mail from '../images/icon-email.svg';
import phone from '../images/icon-phone.svg';
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex
     direction={{base: 'column', md: 'row'}} 
     backgroundColor={'#000035'} 
     color={'#fff'} px={'7%'} 
     paddingBottom={{base:'12rem', md: '5rem'}}
     pt={{base: '5rem', md: '0rem'}}
     fontSize={{base: '1.5rem'}}
     > 
      <Flex
       direction={'column'} 
       align={{base: 'start', md: 'center'}} 
       mr={{base: '3rem', lg: '10rem'}}
      >
        <Image
        boxSize={{base: '5rem', sm: '8rem', md: '12rem' }} 
        objectFit={'contain'} 
        src={logo} alt='logo'
        >
        </Image>

        <Box>
          <Flex>
            <Image src={mail} alt={'icon-email'}></Image>
            <Text fontSize={{base:'1.3rem', md: '1rem'}} pl={'1rem'}>example@fylo.com</Text>
          </Flex>

          <Flex mt={'1.5rem'}>
            <Image src={phone} alt={'icon-phone'}></Image>
            <Text fontSize={{base:'1.3rem', md: '1rem'}} pl={'1rem'}>Phone: +1-543-12-4567</Text>
          </Flex>
        </Box>
      </Flex>
    
      <Flex
       direction={{base: 'column', md: 'row'}} 
       align={'start'} justify={'center'} 
       gap={{base: '3rem', lg: '12rem', }} 
       pt={{base: '4rem', md:'12rem'}}
       
      >

        <Box>
          <Text>About Us</Text>
          <Text pt={'1rem'}>Jobs</Text>
          <Text pt={'1rem'}>Press</Text>
          <Text pt={'1rem'}>Blog</Text>
        </Box>

        <Box>
          <Text>Contact Us</Text>
          <Text pt={'1rem'}>Terms</Text>
          <Text pt={'1rem'}>Privacy</Text>
        </Box>

        <Flex  color={'#fff'} justify={{base: 'center', md: 'space-between'}} gap={'2rem'}>
       
          <FaFacebook className='icon' />
          <FaInstagram className='icon' />
          <FaTwitter className='icon' />
      
        </Flex>
      </Flex>
    </Flex>
  )
}
