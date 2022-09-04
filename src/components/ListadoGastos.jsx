import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import Filtros from './Filtros'
import Gasto from './Gasto'

const ListadoGastos = () => {

   

  const {gastos, gasto, gastoFiltrado, setGastoFiltrado, filtro} = useContext(UserContext)
  return (
    <div className='listado-gastos contenedor'> 

       {
         filtro ? (
           
           <>
           <h2>{gastoFiltrado.length ? 'Gastos' :' No hay gastos aún'}</h2>
              {  gastoFiltrado.map( gast => (
                <Gasto key = {gast.id} gast={gast} />
                ))
              }
            </>


          ) : (
            <>
            <h2 className='no-gastos'>{gastos.length ? 'Gastos' :' Aún NO tienes gastos!!!'}</h2>
             {   gastos.map( gast => (
                  <Gasto key = {gast.id} gast={gast} />
                 ))
             }
            </>
          )
       }


       
      </div>
  )
}

export default ListadoGastos