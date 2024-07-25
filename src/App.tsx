import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import RootLayout from './layouts/RootLayout';
import './App.css';
import { ThemeContextProvider } from './context/ThemeContext';
import { Settings } from './Settings';

function App() {

  const client = new ApolloClient({
    uri: Settings.graphQl.endpoint,
    cache: new InMemoryCache()
  })
  
  return (
    <ChakraProvider>
      <ThemeContextProvider>
        <ApolloProvider client={client}>
          <RootLayout/>
        </ApolloProvider>
      </ThemeContextProvider>
    </ChakraProvider>
  )
}

export default App
