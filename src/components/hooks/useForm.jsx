import React, { useState } from 'react'
import { useIsValid } from './useIsValid';

export const useForm = ( initialValue = 0) => {
    
    const [presupuesto, setPresupuesto] = useState( initialValue);
    const [mensaje, setMensaje] = useState("");
    
    const {isValidPresupuesto, setIsValidPresupuesto} = useIsValid();
     
    const handlepresupuesto = (e) => {
      e.preventDefault();
      setPresupuesto(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!presupuesto || presupuesto < 0) {
        setMensaje("No es un presupuesto valido");
        return;
      }
      setMensaje("");
      setIsValidPresupuesto(true)
    };






  return  {
    presupuesto,
    setPresupuesto, 
    mensaje,
    setMensaje,
    handleSubmit,
    handlepresupuesto,
    isValidPresupuesto, 
    setIsValidPresupuesto
  }
}

