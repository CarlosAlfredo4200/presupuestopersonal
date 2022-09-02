import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
 
 
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = () => {

    const {presupuesto, gastos  } = useContext(UserContext);
    const [porcentaje, setPorcentaje] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
       const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
       const totalDisponible = presupuesto - totalGastado;

       //Calcular porcentajes grafica

       const nuevoPorcentaje = (((presupuesto - totalDisponible)/ presupuesto) * 100).toFixed(2);
       setDisponible(totalDisponible)
       setGastado(totalGastado);
       
       setTimeout(() => {
           setPorcentaje(nuevoPorcentaje)
        
       }, 1000);
        
    }, [gastos])
    
 
     

    const formatearCantidad = ( cantidad ) => {
        return ( cantidad * 1).toLocaleString('en-US', {
            style:'currency',
            currency: 'USD'
        })
    }

    
    useEffect(() => {
     localStorage.setItem('presupuesto', presupuesto ?? 0)
    }, [presupuesto])
    
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
             <CircularProgressbar 
             styles={buildStyles({
                pathColor:'#3b282f6',
                trilColor:'#f5f5f5',
                textColor:'blue'
             })}
             value={porcentaje}
             text={`${porcentaje}% Gastado`}
             />
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