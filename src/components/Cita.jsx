import React from 'react';

const Cita = ({cita}) => (
    <div className="cita">
        <span>
            <p>Mascota: {cita.mascota}</p>
            <p>Dueño: {cita.propietario}</p>
            <p>Fecha: {cita.fecha}</p>
            <p>Hora: {cita.hora}</p>
            <p>Sintomas: {cita.sintomas}</p>
        </span>
    </div> 
);
 
export default Cita;