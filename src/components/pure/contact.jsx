
import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contact.class';

export const ContactComponent = ({ contacto, completa, remove }) => {

//Dependiendo de la importancia renderiza una alerta diferente



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
                <span className='mx-3 align-middle'>{contacto.nombre}</span>
            </td>
            <td>
                <span className='mx-3 align-middle'>{contacto.descripcion}</span>
            </td>
            <td>
                <span className='mx-3 align-middle'>{contacto.importancia}</span>
            </td>
            <td>
                <span className='mx-3 align-middle'>{contactoCompletadoIcono()}
                <i className='bi bi-trash ms-2' onClick={()=>{remove(contacto)}}></i></span>
            </td>
        </tr>
    )
}

ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
    completa: PropTypes.func,
    remove: PropTypes.func
}
