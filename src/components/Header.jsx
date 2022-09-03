import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";
import { FcBullish } from "react-icons/fc" ;

FcBullish
const Header = () => {
  const { isValidPresupuesto } = useContext(UserContext);
  return (
    <>
    <header>
      <h1>Gestión de gastos</h1>
      {!isValidPresupuesto && ( <div className="icono-header">
        <FcBullish />
      </div>)}
     
      

      {isValidPresupuesto ? <ControlPresupuesto /> : <NuevoPresupuesto />}
      
    </header>

    {!isValidPresupuesto && (<div className="footermensaje">
        <p>Gestiona con facilidad tus gastos!!!</p>
        <p className="mejora">Mejora tú economia</p>
       </div>)}
       
    </>
    
  );
};

export default Header;
