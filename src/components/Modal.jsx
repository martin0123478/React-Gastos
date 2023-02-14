import React from 'react'
import {useState,useEffect} from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'
const Modal = ({setModal,
    animarModal,
    setAnimarModal,
    guardarGasto,
    gastoEditar}) => {
    const [mensaje,setMensaje] = useState('')

    const [nombre,setNombre] = useState('')
    const [cantidad,setCantidad] = useState(0)
    const [categoria,setCategpria] = useState('')
    const [id,setId] = useState('')
    const [fecha,setFecha] = useState('')


   

    useEffect(()=>{
        if(Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategpria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
          }
    },[])


    const ocultarModal = () =>{
        setModal(false)
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = e =>{
        e.preventDefault()
        if([nombre,cantidad,categoria].includes('')){
            setMensaje('Todos los Campos son obligatorios')
            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return
        }
        guardarGasto({nombre,cantidad,categoria,id,fecha})
    }
  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img src={CerrarBtn} alt="ceraraModal" 
            onClick={ocultarModal}
            />
        </div>

        <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className='campo'>
                <label htmlFor="nombre">Nombre Gasto</label>
                <input type="text"
                id='nombre'
                value={nombre}
                onChange={e =>setNombre(e.target.value)}
                placeholder='Añade el Nombre del Gasto' />
            </div>

            <div className='campo'>
                <label htmlFor="cantidad">Cantidad</label>
                <input type="number"
                id='cantidad'
                value={cantidad}
                onChange={e => setCantidad(Number(e.target.value))}
                placeholder='Añade la cantidad del gasto: Ejemplo 300' />
            </div>

            <div className='campo'>
                <label htmlFor="categoria">Categoria</label>
                <select name="" id="categoria"
                value={categoria}
                onChange={e =>setCategpria(e.target.value)}
                >
                <option value="">--Seleccione--</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos Varios</option>
                <option value="ocio">Ocio</option>
                <option value="suscripciones ">Suscripciones</option>
               
                </select>
                
            </div>

            <input type="submit"
            value={gastoEditar.nombre ? 'Guardar Cambios' : 'Nuevo Gasto'} />
        </form>
    </div>
  )
}

export default Modal