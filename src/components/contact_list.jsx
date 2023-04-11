import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contact.class'
import { LEVELS } from '../models/levels'

export const ContactComponent = (props) => {

    //Contacto de prueba
    const contactDefault = new Contacto("Andres", "Hermano", true, LEVELS.NORMAL);

    //Estado inicial componente
    const [contactos, setContactos] = useState(contactDefault)

    //Ciclo de vida del componente
    useEffect(() => {
        console.log("El estado del componente Contact_list a cambiado")
    
      return () => {
        console.log("El componente va a desaparecer")
    
      }
      //Tendra efecto al cambiar contactos
    }, [contactos])
    

    return (
        <div>
            <h1>Lista de contactos</h1>
        </div>
    )
}

ContactComponent.propTypes = {

}



