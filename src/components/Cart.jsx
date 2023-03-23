
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Box,
  Textarea,
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import SendOrder from "./SendOrder";

const Cart = ({ product }) => {
  const [cart, setCart] = useState(useContext(ShoppingCartContext));

  const handleAddToCart = () => {
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    };
    setCart([...cart, newItem]);
  };

  return (
    <Container maxW="container.md" m="2rem">
      <Center>
        <Heading as="h1" size="2xl" mb="2rem">
          {product.name}
        </Heading>
      </Center>
      <GridItem colSpan={2} mb="2rem">
        <Card maxW="xl">
          <Flex>
            <Box w="50%" p="2rem">
              <img src={product.image} alt={product.name} />
            </Box>
            <Box w="50%" p="2rem">
              <Text as="h2" fontSize="2xl" mb="1rem">
                {product.name}
              </Text>
              <Text as="p" mb="1rem">
                {product.description}
              </Text>
              <Text as="p" mb="2rem" fontWeight="bold" fontSize="xl">
                Price: U$D {product.price}
              </Text>
              <Button
                colorScheme="teal"
                size="lg"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </Box>
          </Flex>
        </Card>
      </GridItem>
    </Container>
    
  );
};
<SendOrder/>

export default Cart;



/*import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Button,
    Container,
    Box,
    Textarea,
    Center,
    Heading,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    GridItem,
    Flex,
  } from "@chakra-ui/react";
  import { useState, useContext } from "react";
  import { ShoppingCartContext } from "../context/ShoppingCartContext"
  import SendOrder from "./SendOrder"
  
  const Cart = () => {
    const [cart, setCart] = useContext(ShoppingCartContext);
    
  
    
    return (
      <>
        <Center bg="#D6EAF8" h="100px" color="black">
          <Heading as="h2" size="2xl">
            Cart
          </Heading>
        </Center>
        {cart.map((item) => {
          return (
            <Container
              key={item.id}
              maxW="container.sm"
              className="main-catalogue"
            >
              <Card maxW="sm" m="3rem">
                <CardHeader>
                  <Heading size="md">{item.name}</Heading>
                </CardHeader>
                <CardBody>
                  <Text as="b">Quantity: {item.quantity}</Text>
                  <Text>Price: U$D {item.price}</Text>
                </CardBody>
                <CardFooter>
                  <Button
                    colorScheme="red"
                    onClick={() => console.log("Eliminando")}
                  >
                    Borrar del Carrito
                  </Button>
                </CardFooter>
              </Card>
            </Container>
          );
        })}
      <SendOrder/>
      </>
    );
  };
  
  export default Cart;
 */ 