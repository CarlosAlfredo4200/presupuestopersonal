import React, { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import IconoNuevoGasto from '../img/nuevo-gasto.svg'
 


const ControlPresupuesto = () => {

    

     
    const {presupuesto  } = useContext(UserContext);

    const formatearCantidad = ( cantidad ) => {
        return ( cantidad * 1).toLocaleString('en-US', {
            style:'currency',
            currency: 'USD'
        })
    }

    
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Graficas</p>
        </div>

        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>

            <p>
                <span>Disponible: </span> {formatearCantidad(0)}
            </p>

            <p>
                <span>Gastado: </span> {formatearCantidad(0)}
            </p>

            

        </div>
       
    </div>
  )
}

export default ControlPresupuesto