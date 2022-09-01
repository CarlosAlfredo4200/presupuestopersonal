import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import IconoNuevoGasto from '../img/nuevo-gasto.svg'
 


const ControlPresupuesto = () => {

    const {presupuesto, gastos  } = useContext(UserContext);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
       const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
       const totalDisponible = presupuesto - totalGastado;

       setDisponible(totalDisponible)
       setGastado(totalGastado);
        
    }, [gastos])
    
 
     

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
                <span>Disponible: </span> {formatearCantidad(disponible)}
            </p>

            <p>
                <span>Gastado: </span> {formatearCantidad(gastado)}
            </p>

            

        </div>
       
    </div>
  )
}

export default ControlPresupuesto