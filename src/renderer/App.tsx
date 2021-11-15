import React, { useEffect, useState } from 'react'
import { extendTheme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import Home from '../1_pages/Home'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Home />
      <ChakraProvider theme={theme}>
        <div className='padding'>
          <h1>Count {count}</h1>
          <div>Hello world!</div>
          <div>Fast refresh active</div>
        </div>
      </ChakraProvider>
    </>
  )
}
