import React, { useState } from 'react'

export const useIsValid = () => {

    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  return  { 
    isValidPresupuesto, 
    setIsValidPresupuesto
}
}
