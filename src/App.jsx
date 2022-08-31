import { useContext, useState } from "react";
import "./App.css";
import { UserContext } from "./components/context/UserContext";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconoNuevoGasto from './img/nuevo-gasto.svg'
 

 
function App() {
   
  
  const {isValidPresupuesto, modal, setModal, handleNuevoGasto } = useContext(UserContext);
  
  return (
   
      <div className="App">
        <Header />

        {isValidPresupuesto && (

          <div className="nuevo-gasto">
                <img  src={IconoNuevoGasto} alt='Nuevo gasto' onClick={handleNuevoGasto}/>
            </div>
          )}

          { modal && <Modal />}
      </div>
  );
}

export default App;
