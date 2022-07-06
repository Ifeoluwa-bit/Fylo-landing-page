import { Button as ChakraButton } from '@chakra-ui/react'

export default function Button({width, height, Text, borderRadius, mt}) {
  return (
    <ChakraButton
      w={width} 
      h={height} 
      mt={mt}
      borderRadius={borderRadius} 
      size='lg' 
      fontSize={{base: '1.7rem', md: '1rem'}} 
      colorScheme='blue'>
    {Text}
  </ChakraButton>
  )
}
