import React, { useState, useEffect } from 'react'
import { LEVELS } from '../models/levels'
import { Contacto } from '../models/contact.class';
import { ContactComponent } from './pure/contact';

export const ContactList = (props) => {

  //Contacto de prueba
  const contactDefault = new Contacto("Andres", "Default Description", true, LEVELS.NORMAL);

  //Estado inicial componente
  const [contacts, setContactos] = useState(contactDefault)

  //Ciclo de vida del componente
  useEffect(() => {
    console.log("El estado del componente Contact_list a cambiado")

    return () => {
      console.log("El componente va a desaparecer")

    }
    //Tendra efecto al cambiar contactos
  }, [contacts])


  return (
    <div>
      <h1>Lista de contactos</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Importancia</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <ContactComponent contacto={contacts} />

        </tbody>
      </table>
    </div>
  )
}



