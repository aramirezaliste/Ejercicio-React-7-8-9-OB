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
                                <ContactComponent contacto={contacts} />

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}



