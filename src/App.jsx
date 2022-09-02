import { useContext, useState, useEffect } from "react";
import "./App.css";
import { UserContext } from "./components/context/UserContext";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const { isValidPresupuesto, modal, handleNuevoGasto, gastoEdit, setModal, setAnimarModal,setIsValidPresupuesto } =
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
