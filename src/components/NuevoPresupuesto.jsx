import React from 'react'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, handlepresupuesto}) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        
        <form className='formulario'>
            <div className="campo">
                <label>Definir Presupuesto</label>
                <input 
                    type="text"
                    placeholder='Agregar presupuesto'
                    className='nuevo-presupuesto'
                    value={presupuesto}
                    onChange={handlepresupuesto}
                
                />
            </div>

            <input type="submit" value="Agregar"/>
        </form>
    </div>
  )
}

export default NuevoPresupuesto