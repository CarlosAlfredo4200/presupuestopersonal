import { useContext, useState } from "react";
import "./App.css";
import { UserContext } from "./components/context/UserContext";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconoNuevoGasto from './img/nuevo-gasto.svg'
 

 
function App() {
  
  const {isValidPresupuesto, modal, setModal} = useContext(UserContext);
  
  const handleNuevoGasto = () => {
    setModal(true)
  }


  
  return (
   
      <div className="App">
        <Header />

        {isValidPresupuesto && (


          <div className="nuevo-gasto">
                <img  src={IconoNuevoGasto} alt='Nuevo gasto' onClick={handleNuevoGasto}/>
            </div>
          )}

          { modal && <Modal setModal={setModal} />}
      </div>

      
    
  );
}

export default App;
