import { Input as ChakraInput } from '@chakra-ui/react'

export default function Input({width, height, placeholder, borderRadius, borderColor, fontSize, color, backgroundColor}) {
  return (
    <ChakraInput
     w={width} 
     h={height} 
     placeholder={placeholder} 
     borderRadius={borderRadius}
     borderColor={borderColor}
     fontSize={fontSize}
     color={color} 
     backgroundColor={backgroundColor}
    />
  )
}
