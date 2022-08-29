import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'

function App() {
const [presupuesto, setPresupuesto] = useState(0)
const [mensaje, setMensaje] = useState('')



const handlepresupuesto = (e) => {
  e.preventDefault();
  setPresupuesto(e.target.value)
}

const handleSubmit = (e) =>{
  e.preventDefault();

  if(!presupuesto || presupuesto < 0){
    setMensaje('No es un presupuesto valido')
    return;
  }
  setMensaje('')


}

  return (
    <div className="App">
     <Header 
     presupuesto ={presupuesto} 
     setPresupuesto={setPresupuesto}
     handlepresupuesto={handlepresupuesto}
     handleSubmit={handleSubmit}
     mensaje={mensaje}
     />
    </div>
  )
}

export default App
