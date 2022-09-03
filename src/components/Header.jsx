import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = () => {
  const { isValidPresupuesto } = useContext(UserContext);
  return (
    <>
    <header>
      <h1>Control de PRESUPUESTO</h1>
      

      {isValidPresupuesto ? <ControlPresupuesto /> : <NuevoPresupuesto />}
      
    </header>
       <div className="footermensaje">
        <p>Gestiona con facilidad tus gastos!!!</p>
        <p className="mejora">Mejora tú economia</p>
       </div>
    </>
    
  );
};

export default Header;
