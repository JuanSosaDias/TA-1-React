import React from "react";

function Card({titulo, descripcion, personaAsignada, fechaInicio, fechaFin}) {
    
    return (
        <div className="card">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <p>{personaAsignada}</p>
            <p>{fechaInicio}</p>
            <p>{fechaFin}</p>
        </div>
    );

}

export default Card;