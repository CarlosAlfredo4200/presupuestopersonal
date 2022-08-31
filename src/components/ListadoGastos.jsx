import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import Gasto from './Gasto'

const ListadoGastos = () => {

  const {gastos} = useContext(UserContext)
  return (
    <div className='listado-gastos contenedor'> 
       <h2>{gastos.length ? 'Gastos' :' No hay gastos aún'}</h2>
       {gastos.map( gast => (
        <Gasto key = {gast.id} gast={gast}/>
       ))}
      </div>
  )
}

export default ListadoGastos