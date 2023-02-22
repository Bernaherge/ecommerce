import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CarWidget";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const NavBar = () => {
  return (
    <>
      <Container maxW="-moz-max-content" bg="green.100" color="#262626">
        <Flex alignItems="center" gap="2">
          <Image
            border radius= 'full'
            boxSize='110px'
            src="https://www.shutterstock.com/image-illustration/east-asia-on-detailed-model-600w-626623727.jpg"
            alt='brand'
          />
          <Box p="10" w="400px" h="100">
            <Heading size="md">
              <Link to={"/"}><h1 className="titulo">Productos Plantas de Tratamiento</h1></Link>
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <Link to={"/catalogue"}>
                <Button colorScheme='blue' variant='solid'>
                  Productos
                </Button>
              </Link>

              <MenuButton
                as={Button}
                variant="outline"
                colorScheme="blue"
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Categorias
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"Aditivos Líquidos"}`}>
                  <MenuItem>Aditivos Líquidos</MenuItem>
                </Link>
                <Link to={`/category/${"Aditivos Sólidos"}`}>
                  <MenuItem>Aditivos Sólidos</MenuItem>
                </Link>
                <Link to={`/category/${"Bombas y Soplantes"}`}>
                  <MenuItem>Bombas y Soplantes</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="120">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;