import { useState, useEffect } from 'react'
import ItemList from '../components/ItemList'
import Data from '../data.json'
import { useParams } from 'react-router-dom'
import {Heading, Center} from '@chakra-ui/react'

const ItemListContainer = () => {
  const {category} = useParams();



  const catFilter = Data.filter((producto) => producto.category === category);
  return (
    <div>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Todos los Productos
        </Heading>
      </Center>
      {category ? <ItemList producto={catFilter} /> : <ItemList producto={Data} />}
    </div>

  );

  
};

export default ItemListContainer
