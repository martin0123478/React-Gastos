import React from 'react'
import {useState} from 'react'
import CerrarBtn from '../img/cerrar.svg'
const Modal = ({setModal,animarModal,setAnimarModal}) => {

    const [nombre,setNombre] = useState('')
    const [cantidad,setCantidad] = useState(0)
    const [categoria,setCategpria] = useState('')


    const ocultarModal = () =>{
        setModal(false)
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }
  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img src={CerrarBtn} alt="ceraraModal" 
            onClick={ocultarModal}
            />
        </div>

        <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            <legend>Nuevo Gasto</legend>
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
            value="Añadir Gasto" />
        </form>
    </div>
  )
}

export default Modal