import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../models/levels'
import { Contacto } from '../models/contact.class';

export const CreateContacto = ({ add }) => {

    //definiendo las variables de referencia
    const nameRef = useRef('');
    const descripcionRef = useRef('');
    const importanciaRef = useRef(LEVELS.NORMAL)

    //Funcion que envia informacion a la funcion add del padre
    function addContacto(e){
        e.preventDefault();
        const newContacto = new Contacto(
            nameRef.current.value, 
            descripcionRef.current.value,
            false,
            importanciaRef.current.value
            );

        add(newContacto);
    }


    return (
        <form className='d-flex justify-content-center align-items-center' 
            onSubmit={addContacto}>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} className='col-12 form-control form-control-lg mb-2' type='text' placeholder='Nombre Contacto' />
                <input ref={descripcionRef} className='col-12 form-control form-control-lg mb-2' type="text" placeholder='Descripcion' />

                <select className='form-select mb-2' ref={importanciaRef} defaultValue={LEVELS.NORMAL}>
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.IMPORTANTE}>Importante</option>
                </select>

                <button className='btn btn-success mb-2' type='submit'>Crear Contacto</button>
            </div>
        </form>
    )
}

CreateContacto.propTypes = {
    add: PropTypes.func
}


