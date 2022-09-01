import React, { useState } from 'react'
import { useGastoEdit } from './useGastoEdit';

export const useModal = () => {

    const [modal, setModal] = useState(false);
    const [animarModal, setAnimarModal] = useState(false);
    const {gastoEdit, setGastoEdit} = useGastoEdit();
     

    const handleOcultarModal = () => {
        setAnimarModal(false);

        setTimeout(() => {
            setModal(false);
            
        }, 500);
    }

    const handleNuevoGasto = () => {
       
        
        setModal(true);
        setTimeout(() => {
            setAnimarModal(true);
        }, 500);
      }

  return  {
    modal,
    setModal,
    handleOcultarModal,
    handleNuevoGasto,
    animarModal,
    setAnimarModal,
    setGastoEdit, 
    gastoEdit
    
  }
}
