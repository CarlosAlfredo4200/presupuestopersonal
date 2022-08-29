import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({presupuesto,setPresupuesto, handlepresupuesto}) => {

     
  return (
    <header>
        <h1>Control de presupuesto</h1>
        <NuevoPresupuesto
             presupuesto ={presupuesto} 
             setPresupuesto={setPresupuesto}
             handlepresupuesto={handlepresupuesto}
        />
    </header>
  )
}

export default Header