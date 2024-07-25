import { ChakraProvider } from '@chakra-ui/react';
import RootLayout from './layouts/RootLayout';
import './App.css';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  
  return (
    <ChakraProvider>
      <ThemeContextProvider>
        <RootLayout/>
      </ThemeContextProvider>
    </ChakraProvider>
  )
}

export default App
