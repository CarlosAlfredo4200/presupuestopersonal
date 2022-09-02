import React, { useState, useEffect } from 'react'
import { useIsValid } from './useIsValid';

export const useForm = () => {
    
    const [presupuesto, setPresupuesto] = useState(
        localStorage.getItem('presupuesto') ?? 0);
    const [mensaje, setMensaje] = useState("");

    
    const {isValidPresupuesto, setIsValidPresupuesto} = useIsValid();
    
     
    const handlepresupuesto = (e) => {
      e.preventDefault();
      setPresupuesto(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!presupuesto || presupuesto < 0) {
        setMensaje("No es un presupuesto valido!!!");
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

