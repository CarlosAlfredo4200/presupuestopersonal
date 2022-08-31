import React, { useState } from 'react'
import GeneradorId from '../helpers/GenerarId'

export const useGasto = () => {

   

    const [gastos, setGastos] = useState([])

    const guardarGasto = (gasto) => {
        gasto.fecha = Date.now();
        gasto.id = GeneradorId()
       setGastos([...gastos, gasto])

      
        
    }

  return  {  guardarGasto, gastos, setGastos }
}
