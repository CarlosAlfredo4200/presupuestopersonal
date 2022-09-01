import React from "react";
import { FormatFecha } from "./helpers/FormatFecha";
import { RiDeleteBin2Fill } from "react-icons/ri" ;
import { FaEdit } from "react-icons/fa" ;

import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const diccionarioIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
};

const Gasto = ({ gast }) => {
  
  const { setGastoEdit} = useContext(UserContext)
  const { fecha } = gast;

const handleEditarGasto = () => {
      setGastoEdit(gast); 
    
}

 
 

  return (
    
      
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={diccionarioIconos[gast.categoria]} alt="icono gasto" />
            <div className="descripcion-gasto">
              <p className="categoria">{gast.categoria}</p>
              <p className="nombre-gasto">{gast.nombre}</p>
              <p className="fecha-gasto">
                Agregado el:{""} <span>{FormatFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">$: {gast.cantidad}</p>
          <FaEdit onClick={handleEditarGasto} />  
          <RiDeleteBin2Fill  className="icono1" />
        </div>
    
  );
};

export default Gasto;
