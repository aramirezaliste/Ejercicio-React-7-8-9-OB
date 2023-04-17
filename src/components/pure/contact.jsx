
import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contact.class';

export const ContactComponent = ({ contacto }) => {
    return (
        <tr className='fw-normal'>
            <td>
                <span className='align-middle'>{contacto.nombre}</span>
            </td>
            <td>
                <span className='align-middle'>{contacto.descripcion}</span>
            </td>
            <td>
                <span className='align-middle'>{contacto.importancia}</span>
            </td>
            <td>
                <span className='align-middle'>{contacto.estado ? "Conectado" : "Desconectado"}</span>
            </td>
        </tr>
    )
}

ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}
