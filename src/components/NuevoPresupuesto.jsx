import React from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, handleSubmit, handlepresupuesto, mensaje}) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        
        <form onSubmit={handleSubmit} className='formulario'>
            <div className="campo">
                <label>Definir Presupuesto</label>
                <input 
                    type="number"
                    placeholder='Agregar presupuesto'
                    className='nuevo-presupuesto'
                    value={presupuesto}
                    onChange={handlepresupuesto}
                
                />
            </div>

            <input type="submit" value="Agregar" />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto