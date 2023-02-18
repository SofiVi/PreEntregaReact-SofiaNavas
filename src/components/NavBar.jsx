import React from 'react'
import CartWidget from './CartWidget';
import { Container, Flex, Spacer, Box, Heading, Menu, Button, MenuList, MenuButton, MenuItem, } from '@chakra-ui/react';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';


function NavBar(props) {
  return (
    <>
         <Container maxW= "-moz-max-content" className="navBar">
            <Flex alignContent="center" gap="2">
                
                <Box> 
                  <Heading >
                    <Link to={"/"}>
                      <img src={logo} alt="Logo" className="logo" />
                    </Link>
                  </Heading>
                </Box>

                <Spacer/>

                <Box>
                    <Menu>
                      <Link to={"/category"}>   
                        <MenuButton  as={Button} size="lg"
                                      variant="outline"
                                      colorScheme="Orange 50"
                                      m="5">
                            Menue
                        </MenuButton>
                      </Link>
                    </Menu>
                </Box>
                  

                <Spacer/>
          
                <Box>
                    <Menu>
                            <MenuButton
                                        as={Button}
                                        size="lg"
                                        variant="outline"
                                        colorScheme="Orange 50"
                                        m="5">
                            Categories
                            </MenuButton>

                            <MenuList color="red">
                                        
                                
                                  <Link to={`/category/${"pizzas"}`}>
                                    <MenuItem>Pizzas</MenuItem>
                                  </Link>

                                  <Link to={`/category/${"empanadas"}`}>
                                    <MenuItem>Empanadas</MenuItem>
                                  </Link>
                                                  
                                                  
                                  <Link to={`/category/${"desserts"}`}>
                                    <MenuItem>Desserts</MenuItem>
                                  </Link>
                                                  
                                                  
                                  <Link to={`/category/${"refreshing"}`}>
                                    <MenuItem>Refreshing</MenuItem>
                                  </Link>
                               
                            </MenuList>


                    </Menu>
                  
                    

                </Box>


                <Spacer/>

                <Box p="10" size="xls">
                    <Link to={"/cart"}>
                      <CartWidget />
                    </Link>
                </Box>
                
            </Flex>

         </Container>
        
    
    </>
    
  )
}

NavBar.propTypes = {}

export default NavBar;
