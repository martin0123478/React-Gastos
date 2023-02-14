import { useState,useEffect } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import ListadoGstos from './components/ListadoGstos'
import {generarId} from './helpers'

function App() {
  const [presupuesto,setPresupuesto] = useState(0)
  const [isValidPrespuesto, setIsvalidPresupuesto] = useState(false)
  const [modal,setModal] = useState(false)
  const [animarModal,setAnimarModal] = useState(false)
  const [gastos,setGastos] = useState([])

  const [gastoEditar,setGastEditar] = useState({})

  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
     
  
      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
    }
  },[gastoEditar])

  const handleNuevoGasto = () =>{
    setModal(true)
    setGastEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }
  const guardarGasto = gasto =>{
    if(gasto.id){
      //actualizar
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
      setGastEditar({})
    }else{
      //nuevo gasto
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos,gasto])
    }
   
    setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
  }

  const EliminarGasto = id =>{
    const gastosActualizados = gastos.filter(gasto => gasto.id !==id)
    setGastos(gastosActualizados)
  }



  return (
    <div className={modal ? 'fijar': ''}>
      <Header
      gastos = {gastos}
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValidPrespuesto = {isValidPrespuesto}
        setIsvalidPresupuesto = {setIsvalidPresupuesto}
      />


    {isValidPrespuesto && (
      <>
      <main>
      <ListadoGstos
      gastos = {gastos}
      setGastEditar ={setGastEditar}
      EliminarGasto = {EliminarGasto}
      />
      </main>
      <div className='nuevo-gasto'>
      <img src={IconoNuevoGasto} alt="icono-NUEVO-GASTO" 
      onClick={handleNuevoGasto}/>
    </div>
    </>
    )}

    {modal && <Modal setModal = {setModal} animarModal = {animarModal} setAnimarModal={setAnimarModal}
    guardarGasto = {guardarGasto}
    gastoEditar={gastoEditar}
    setGastEditar={setGastEditar}
    />}
      
    </div>
  )
}

export default App
