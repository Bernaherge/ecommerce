import ItemDetail from "../components/ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const productosCollection = collection(db, "productosplanta");
    getDocs(productosCollection).then((querySnapshot) => {
      const productos = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(productos);
    });
  }, []);

  return <ItemDetail productos={data} />;
};

export default ItemDetailContainer;