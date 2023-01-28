import React from 'react'
import CartWidget from './CartWidget';
import { Container, Flex, Spacer, Box, Heading } from '@chakra-ui/react';


function NavBar(props) {
  return (
    <>
         <Container maxW= "-moz-max-content" bg='blue.200' color='white'>
            <Flex alignContent="center" gap="2">
                <Box p="2">
                    <Heading size="md"> E-Commerce</Heading>
                </Box>

                <Spacer/>

                <Box p="2">
                <CartWidget/>
                </Box>
                
            </Flex>

         </Container>
        
    
    </>
    
  )
}

NavBar.propTypes = {}

export default NavBar;

