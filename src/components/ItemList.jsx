import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ producto }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {producto?.map((producto) => (
          <Item
            key={producto.id}
            id={producto.id}
            name={producto.name}
            kg={producto.kg}
            price={producto.price}
            description={producto.description}
            stock={producto.stock}
            category={producto.category}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;