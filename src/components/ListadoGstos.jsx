import React from 'react'
import Gasto from './Gasto'
const ListadoGstos = ({gastos,setGastEditar,EliminarGasto}) => {
  return (
    <div className='listado-gastos contenedor '>
      <h2>{gastos.length ? 'Gastos': 'No hay gastos aun '}</h2>
      {gastos.map(gasto =>(
        <Gasto
            key = {gasto.id}
            gasto = {gasto}
            setGastEditar={setGastEditar}
            EliminarGasto={EliminarGasto}
        />
      ))}
    </div>
  )
}

export default ListadoGstos

