import ItemDetail from "../components/ItemDetail";
import { useState, useEffect } from "react";
import Data from "../data.json";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
   const { id } = useParams();

   

    useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(Data);
        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []); 



  return <ItemDetail producto={Data} />;
};

export default ItemDetailContainer;