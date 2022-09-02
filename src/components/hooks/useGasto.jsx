import React, { useState, useEffect } from 'react'
import GeneradorId from '../helpers/GenerarId'

export const useGasto = () => {

   

    const [gastos, setGastos] = useState([]);
    const [idEliminar, setIdEliminar] = useState('')

    const guardarGasto = (gasto) => {


      if(gasto.id){
        const gastoActualizado = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState);
        setGastos(gastoActualizado);
      }else{

        gasto.fecha = Date.now();
        gasto.id = GeneradorId()
        setGastos([...gastos, gasto])
      }
  
    }

    const handleEliminarGasto = () => {
      const gastoSeleccionado = gastos.filter( gts => gts.id !== idEliminar);
     setGastos(gastoSeleccionado);
    
      
    }

   
  
     
   

  return  {  guardarGasto, gastos, setGastos, handleEliminarGasto, idEliminar, setIdEliminar }
}
