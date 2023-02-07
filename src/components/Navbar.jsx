import React from 'react'
import CarWidget from './CarWidget'

const Navbar = () => {
  return (
    <nav>
        <div>
            <ul>
                <li>
                    <a href="#">Aditivos liquidos</a>
                </li>
                <li>
                    <a href="#">Aditivos sólidos</a>
                </li>
                <li>
                    <a href="#">Bombas y Soplantes</a>
                </li>
            </ul>
        </div>
        <h1>Insumos Plantas de Tratamiento de Efluentes</h1>
      <CarWidget/>
    </nav>
  )
}

export default Navbar