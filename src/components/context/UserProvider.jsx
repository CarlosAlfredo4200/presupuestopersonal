import React, { useState} from 'react' 
import { useForm } from "../hooks/useForm";
import { useModal } from '../hooks/useModal';
import { UserContext } from "./UserContext";


export const UserProvider = ({ children }) => {

   
  
  const {presupuesto,
    setPresupuesto,
    mensaje,
    setMensaje,
    handleSubmit,
    handlepresupuesto,
    isValidPresupuesto, 
    setIsValidPresupuesto,
    
    
  } = useForm();
  
const { modal, setModal, handleOcultarModal, handleNuevoGasto, animarModal, setAnimarModal} = useModal();

  return (
    <UserContext.Provider
      value={{
        presupuesto,
        setPresupuesto,
        mensaje,
        setMensaje,
        handleSubmit,
        handlepresupuesto,
        isValidPresupuesto, 
        setIsValidPresupuesto,
        modal, 
        setModal,
        handleOcultarModal,
        handleNuevoGasto,
        animarModal,
        setAnimarModal
      }}
    >
      {children}
    </UserContext.Provider>
  );
};