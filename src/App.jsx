import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'

function App() {
const [presupuesto, setPresupuesto] = useState(0)

const handlepresupuesto = (e) => {
  e.preventDefault();
  setPresupuesto(e.target.value)
}

  return (
    <div className="App">
     <Header 
     presupuesto ={presupuesto} 
     setPresupuesto={setPresupuesto}
     handlepresupuesto={handlepresupuesto}
     />
    </div>
  )
}

export default App
