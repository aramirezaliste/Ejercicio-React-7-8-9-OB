import React, { useState, useEffect } from 'react'
import { LEVELS } from '../models/levels'
import { Contacto } from '../models/contact.class';
import { ContactComponent } from './pure/contact';

export const ContactList = (props) => {

    //Contacto de prueba
    const contactDefault = new Contacto("Andres", "Default Description", false, LEVELS.NORMAL);
    const contactDefault1 = new Contacto("Andres2", "Default Description", false, LEVELS.NORMAL);
    const contactDefault2 = new Contacto("Andres3", "Default Description", false, LEVELS.NORMAL);

    //Estado inicial componente
    const [contacts, setContactos] = useState([contactDefault, contactDefault1, contactDefault2])

    //Ciclo de vida del componente
    useEffect(() => {
        console.log("El estado del componente Contact_list a cambiado")

        return () => {
            console.log("El componente va a desaparecer")

        }
        //Tendra efecto al cambiar contactos
    }, [contacts])

    //Funcion que cambia el estado con un evento
    function cambiarCompletado(contacto) {
        console.log("Tarea completa")
        const index = contacts.indexOf(contacto)
        const tempContacts = [...contacts]
        tempContacts[index].estado = !tempContacts[index].estado
        setContactos(tempContacts)
    }

    return (
        <div>
            <div className='col-12 d-flex justify-content-center'>
                <div className="card">
                    <div className="card-header">
                        <h4>Lista de contactos</h4>
                    </div>
                    <div className="card-body">
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Descripcion</th>
                                    <th scope='col'>Importancia</th>
                                    <th scope='col'>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => {
                                    return (
                                        <ContactComponent
                                            key={index}
                                            contacto={contact}
                                            completa={cambiarCompletado} />
                                    )
                                })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}



