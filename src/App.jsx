import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [presupuesto,setPresupuesto] = useState(0)
  const [isValidPrespuesto, setIsvalidPresupuesto] = useState(false)

  return (
    <div>
      <Header
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValidPrespuesto = {isValidPrespuesto}
        setIsvalidPresupuesto = {setIsvalidPresupuesto}
      />
    </div>
  )
}

export default App
