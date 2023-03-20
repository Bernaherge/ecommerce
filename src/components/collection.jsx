import { collection, doc, getDocs, getFirestore } from "firebase/firestore";
import { useState, useEffects } from "react";
const Collection = () => {
    const [procuctos, setProductos] = useState([]);

    useEffects(() => {
      const db = getFirestore();
      const itemsCollection = collection (db, "ecommerce");
getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map ((doc)=> doc.data(), ...doc.id());
      setProductos(docs);

});
    }, []);
    return (
    <div>
        <h2> Collection</h2>
        {procuctos.map((producto)=>(
                <div key={producto.id}>
                <h4>Producto : {producto.marca}</h4>
                <h5>Precio: {producto.precio}</h5>
         </div>
         ))}
    </div>
        
       
  );
};

export default Collection;