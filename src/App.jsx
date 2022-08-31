import { useContext, useState } from "react";
import "./App.css";
import { UserContext } from "./components/context/UserContext";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
import IconoNuevoGasto from './img/nuevo-gasto.svg'
 

 
function App() {
   
  
  const {isValidPresupuesto, modal, handleNuevoGasto } = useContext(UserContext);
  
  return (
   
      <div className="App">
        <Header />

          {isValidPresupuesto && (
          <>

          <main>
            <ListadoGastos />
          </main>
          <div className="nuevo-gasto">
                <img  src={IconoNuevoGasto} alt='Nuevo gasto' onClick={handleNuevoGasto}/>
            </div>
          </>
          )}

          { modal && <Modal />}

          
      </div>
  );
}

export default App;
