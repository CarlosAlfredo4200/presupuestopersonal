import { useContext, useState, useEffect } from "react";
import "./App.css";
import { UserContext } from "./components/context/UserContext";
import Filtros from "./components/Filtros";

import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const { isValidPresupuesto, modal, handleNuevoGasto, gastoEdit, setModal, setAnimarModal,setIsValidPresupuesto, gastos, presupuesto } =
    useContext(UserContext);

  useEffect(() => {
    if (Object.keys(gastoEdit).length > 0) {
      setModal(true);

      setTimeout(() => {
          setAnimarModal(true);
      }, 500);
    }
   
     
  }, [gastoEdit]);


  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto]);


  
 

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
     
    if(presupuestoLS > 0){
      setIsValidPresupuesto(true)
    } 
  }, [])
  
  

  return (
    <div className={modal ? "fijar" : ""}>
      <Header />


      {isValidPresupuesto && (
        <>
          <main>
            <Filtros />
            <ListadoGastos   />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && <Modal />}
    </div>
  );
}

export default App;
