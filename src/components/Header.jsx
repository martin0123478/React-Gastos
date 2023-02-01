import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
    presupuesto,
    setPresupuesto,
    isValidPrespuesto,
    setIsvalidPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>


        {isValidPrespuesto ? (
            <ControlPresupuesto
            presupuesto = {presupuesto}
            />
        ) : (
            <NuevoPresupuesto
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        setIsvalidPresupuesto = {setIsvalidPresupuesto}
        />
        )}
        
    </header>
  )
}

export default Header