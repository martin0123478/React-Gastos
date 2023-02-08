import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import {generarId} from './helpers'

function App() {
  const [presupuesto,setPresupuesto] = useState(0)
  const [isValidPrespuesto, setIsvalidPresupuesto] = useState(false)
  const [modal,setModal] = useState(false)
  const [animarModal,setAnimarModal] = useState(false)
  const [gastos,setGastos] = useState([])

  const handleNuevoGasto = () =>{
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }
  const guardarGasto = gasto =>{
    gasto.id = generarId()
    setGastos([...gastos,gasto])
    setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
  }



  return (
    <div>
      <Header
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValidPrespuesto = {isValidPrespuesto}
        setIsvalidPresupuesto = {setIsvalidPresupuesto}
      />


    {isValidPrespuesto && (
      <div className='nuevo-gasto'>
      <img src={IconoNuevoGasto} alt="icono-NUEVO-GASTO" 
      onClick={handleNuevoGasto}/>
    </div>
    )}

    {modal && <Modal setModal = {setModal} animarModal = {animarModal} setAnimarModal={setAnimarModal}
    guardarGasto = {guardarGasto}/>}
      
    </div>
  )
}

export default App
