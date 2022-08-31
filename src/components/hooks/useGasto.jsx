import React, { useState } from 'react'
import GeneradorId from '../helpers/GenerarId'

export const useGasto = () => {

   

    const [gastos, setGastos] = useState([])

    const guardarGasto = (gasto) => {
        gasto.id = GeneradorId()
       setGastos([...gastos, gasto])

      
       console.log(gasto);
    }

  return  {  guardarGasto, gastos, setGastos }
}
