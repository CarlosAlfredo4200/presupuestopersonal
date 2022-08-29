import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = () => {
  const { handleSubmit, presupuesto, mensaje, handlepresupuesto } =
    useContext(UserContext);

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleSubmit} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            type="number"
            placeholder="Agregar presupuesto"
            className="nuevo-presupuesto"
            value={presupuesto}
            onChange={handlepresupuesto}
          />
        </div>

        <input type="submit" value="Agregar" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
