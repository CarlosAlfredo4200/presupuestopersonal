import React, { useState, useEffect } from "react";
import { useContext } from "react";
import CerrarBtn from "../img/cerrar.svg";
import { UserContext } from "./context/UserContext";
import Mensaje from "./Mensaje";

const Modal = () => {
  const {
    handleOcultarModal,
    animarModal,
    guardarGasto,
    setAnimarModal,
    setModal,
    gastoEdit,
    setGastoEdit,
  } = useContext(UserContext);



  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [id, setId] = useState('');
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    if (Object.keys(gastoEdit).length > 0) {
      setNombre(gastoEdit.nombre);
      setCantidad(gastoEdit.cantidad);
      setCategoria(gastoEdit.categoria);
      setId(gastoEdit.id);
      setFecha(gastoEdit.fecha);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");

      setTimeout(() => {
        setMensaje("");
      }, 2000);
      return;
    }
    guardarGasto({ nombre, cantidad, categoria, id, fecha });
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleLimpiar = () => {
    setGastoEdit({})

  }

  

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar" onClick={handleOcultarModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend className="titulo-modal">{gastoEdit.nombre ? 'Editar Gasto' : 'Nuevo gasto'}</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre gasto</label>
          <input
            type="text"
            id="nombre"
            placeholder="Añadir gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="text"
            id="cantidad"
            placeholder="Añadir cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Categorias --</option>
            <option value="ahorro">Ahorros</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input type="submit" value={gastoEdit.nombre ? 'Actualizar Gasto' : 'Añadir Gasto'} onClick={handleLimpiar} />
      </form>
    </div>
  );
};

export default Modal;
