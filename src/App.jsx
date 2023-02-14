import { useState,useEffect } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import ListadoGstos from './components/ListadoGstos'
import {generarId} from './helpers'

function App() {
  const [presupuesto,setPresupuesto] = useState(

   Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [isValidPrespuesto, setIsvalidPresupuesto] = useState(false)
  const [modal,setModal] = useState(false)
  const [animarModal,setAnimarModal] = useState(false)
  const [gastos,setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )

  const [gastoEditar,setGastEditar] = useState({})

  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
     
  
      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
    }
  },[gastoEditar])

  useEffect(()=>{
    localStorage.setItem('presupuesto',presupuesto ?? 0)
  },[presupuesto])

  useEffect(()=>{
const prepsupuestoLs = Number(localStorage.getItem('presupuesto')) ?? 0

if(prepsupuestoLs > 0){
  setIsvalidPresupuesto(true)
}
  },[])


  useEffect(()=>{
    localStorage.setItem('gastos',JSON.stringify(gastos) ?? [])
  },[gastos])

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
