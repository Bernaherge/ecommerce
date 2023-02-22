import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    Divider,
    Alert,
  } from "@chakra-ui/react";
  /*importar imagen*/
  import { useParams } from "react-router-dom";
  import ItemCount from "../components/ItemCount";
  
  const ItemDetail = ({ producto }) => {
    const { id } = useParams();
    // console.log(id);
  
    const productoFilter = producto.filter((producto) => producto.id == id);
  
    return (
      <>
        {productoFilter.map((producto) => (
          <div key={producto.id}>
            <Center p="1rem">
              <Card className="card-main">
                <CardBody>
                  
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{producto.name}</Heading>
                    <Text color="blue.800" fontSize="l">
                      Description: {producto.description}
                    </Text>
                    <Text color="blue.800" fontSize="l">
                      Category: {producto.category}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                      Stock: {producto.stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Price: U$D {producto.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
                  <ItemCount
                    stock={producto.stock}
                    id={producto.id}
                    price={producto.price}
                    name={producto.name}
                  />
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;