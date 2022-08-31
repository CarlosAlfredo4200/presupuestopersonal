import React, { useState } from 'react'
import { useContext } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import { UserContext } from './context/UserContext'
 


const Modal = () => {
    
const { handleOcultarModal, animarModal} = useContext(UserContext)
    

  return (
    <div className='modal'>
        
        <div className="cerrar-modal">
            <img src={CerrarBtn} alt="Cerrar"  onClick={handleOcultarModal}/>
        </div>

        <form className={`formulario ${animarModal? 'animar' :'cerrar'}`}>
          <legend>Nuevo gasto</legend>

          <div className="campo">
            <label htmlFor='nombre'>Nombre gasto</label>
            <input type="text" id='nombre' placeholder='Añadir gasto' />
          </div>

          <div className="campo">
            <label htmlFor='cantidad'>Cantidad</label>
            <input type="text" id='cantidad' placeholder='Añadir cantidad' />
          </div>

          <div className="campo">
            <label htmlFor='categoria'>Categoria</label>
             <select id='categoria'>
                <option value="">-- Seleccionar --</option>
                <option value="ahorro">Ahorros</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
             </select>
          </div>

          <input type="submit" value="Añadir gasto" />
        </form>
    </div>
  )
}

export default Modal