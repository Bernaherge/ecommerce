import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/itemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import Home from './components/Home'
import { ShoppingCartProvider} from "./context/ShoppingCartContext"



function App() 
{
  return (
   
    <ShoppingCartProvider>
     <BrowserRouter>
     
     <NavBar/>
     <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/catalogue' element={<ItemListContainer />}/>
      <Route exact path='/category/:category' element={<ItemListContainer />}/>
      <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
      
      
  </Routes>
  </BrowserRouter>

  </ShoppingCartProvider>
  );    

}

export default App
