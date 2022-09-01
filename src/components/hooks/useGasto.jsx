import React, { useState } from 'react'
import GeneradorId from '../helpers/GenerarId'

export const useGasto = () => {

   

    const [gastos, setGastos] = useState([])

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

  return  {  guardarGasto, gastos, setGastos }
}
