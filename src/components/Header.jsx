import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = () => {

    const { isValidPresupuesto } = useContext(UserContext);
    console.log(isValidPresupuesto);
  return (
    <header>
      <h1>Control de presupuesto</h1>

      {isValidPresupuesto ? ( <p>Control Presupesto</p>) : (<NuevoPresupuesto />)}
      
    </header>
  );
};

export default Header;
