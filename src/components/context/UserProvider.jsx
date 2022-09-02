import React, { useState } from "react";
import { useFiltros } from "../hooks/useFiltros";
import { useForm } from "../hooks/useForm";
import { useGasto } from "../hooks/useGasto";
import { useGastoEdit } from "../hooks/useGastoEdit";
import { useModal } from "../hooks/useModal";

import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const {
    presupuesto,
    setPresupuesto,
    mensaje,
    setMensaje,
    handleSubmit,
    handlepresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto,
  } = useForm();

  const {
    modal,
    setModal,
    handleOcultarModal,
    handleNuevoGasto,
    animarModal,
    setAnimarModal,
  } = useModal();

  const { guardarGasto, gastos, setGastos,handleEliminarGasto, idEliminar, setIdEliminar   } = useGasto();
  const {gastoEdit, setGastoEdit} = useGastoEdit();
   
  const [filtro, setFiltro] = useState('');
  const [gastoFiltrado, setGastoFiltrado] = useState([]);
   
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
        setAnimarModal,
        guardarGasto,
        gastos,
        setGastos,
        gastoEdit,
        setGastoEdit,
        handleEliminarGasto,
        setIdEliminar,
        filtro,
        setFiltro,
        gastoFiltrado,
        setGastoFiltrado
       
         
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
