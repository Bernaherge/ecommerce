/*import { useState } from 'react'*/

import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './containers/itemListContainer'

function App() {
  
  return (
     <>
     <Navbar/>
     <ItemListContainer greeting={"Bienvenidos a SAYGI"}/>
     </>
  )
    
}

export default App
