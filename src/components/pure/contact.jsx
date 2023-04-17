
import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contact.class';

export const ContactComponent = ({ contacto, completa }) => {


//Cambiando el estado del contacto

function contactoCompletadoIcono(){
    if(contacto.estado){
        return (<i className='bi bi-circle' onClick={()=>{completa(contacto)}}></i>)
    } else{
        return (<i className='bi bi-circle-fill' onClick={()=>{completa(contacto)}}></i>)
    }
}


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
                <span className='align-middle'>{contactoCompletadoIcono()}
                <i className='bi bi-trash ms-2'></i></span>
            </td>
        </tr>
    )
}

ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}
