
import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contact.class';

export const ContactComponent = ({ contacto }) => {
    return (
        <tr>
            <th>
                <span>{contacto.nombre}</span>
            </th>
            <th>
                <span>{contacto.descripcion}</span>
            </th>
            <th>
                <span>{contacto.importancia}</span>
            </th>
            <th>
                <span>{contacto.estado ? "Conectado" : "Desconectado"}</span>
            </th>
        </tr>
    )
}

ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}
