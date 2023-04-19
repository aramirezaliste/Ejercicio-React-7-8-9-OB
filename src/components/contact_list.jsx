import React, { useState, useEffect } from 'react'
import { LEVELS } from '../models/levels'
import { Contacto } from '../models/contact.class';
import { ContactComponent } from './pure/contact';
import { CreateContacto } from '../forms/createContacto';

export const ContactList = (props) => {

    //Contacto de prueba
    const contactDefault = new Contacto("Andres", "Humano", false, LEVELS.NORMAL);
    const contactDefault1 = new Contacto("Toto", "Perro", false, LEVELS.IMPORTANTE);
    const contactDefault2 = new Contacto("Cleo", "Gata", false, LEVELS.IMPORTANTE);

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

    //Funcion que cambia el estado del contacto
    function cambiarCompletado(contacto) {
        console.log("Contacto modificado")
        const index = contacts.indexOf(contacto)
        const tempContacts = [...contacts]
        tempContacts[index].estado = !tempContacts[index].estado
        setContactos(tempContacts)
    }

    //Funcion que elimina un contacto
    function eliminarContacto(contacto) {
        console.log("Contacto eliminado")
        const index = contacts.indexOf(contacto)
        const tempContacts = [...contacts]
        tempContacts.splice(index,1)
        setContactos(tempContacts)
    }

    //Funcion para crear un nuevo contacto
    function addContacto(nuevo){
        console.log("Contacto creado")
        const tempContacts = [...contacts]
        tempContacts.push(nuevo);
        setContactos(tempContacts)
    }

    return (
        <div>
            <div className='container d-flex justify-content-center'>
                <div className="card row">
                    <div className="card-header">
                        <h4>Lista de contactos</h4>
                    </div>
                    <div className="card-body ">
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col-3'>Nombre</th>
                                    <th scope='col-3'>Descripcion</th>
                                    <th scope='col-3'>Importancia</th>
                                    <th scope='col-3'>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => {
                                    return (
                                        <ContactComponent
                                            key={index}
                                            contacto={contact}
                                            completa={cambiarCompletado}
                                            remove={eliminarContacto} />
                                    )
                                })
                                }

                            </tbody>
                        </table>
                    </div>
                    <CreateContacto add={addContacto}/>
                </div>
            </div>
        </div>
    )
}



