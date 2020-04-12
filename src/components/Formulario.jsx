import React, { Fragment, useState } from 'react';

const Formulario = () => {
    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    // Función que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        /* Para mostrar el nombre del objeto y lo que se está 
        escribiendo, usar:  e.target [name, value] */
        
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        });

    }

    // Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas } = cita;

    
    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            <form>
                <label>Nombre de Mascotas</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                
                <label>Nombre de Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                
                <label>Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita
                </button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;