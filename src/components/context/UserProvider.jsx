import React, { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const handlepresupuesto = (e) => {
    e.preventDefault();
    setPresupuesto(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupuesto valido");
      return;
    }
    setMensaje("");
  };

  return (
    <UserContext.Provider
      value={{
        presupuesto,
        setPresupuesto,
        mensaje,
        setMensaje,
        handleSubmit,
        handlepresupuesto,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
