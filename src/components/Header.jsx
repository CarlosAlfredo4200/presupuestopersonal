import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = () => {
  const { isValidPresupuesto } = useContext(UserContext);
  return (
    <header>
      <h1>Control de presupuesto</h1>

      {isValidPresupuesto ? <ControlPresupuesto /> : <NuevoPresupuesto />}
    </header>
  );
};

export default Header;
