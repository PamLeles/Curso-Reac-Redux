// aula componente com prorpiedades e paramentros 
import React from 'react';
//passando paramentros

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    return (<div>
        <h2>{props.titulo}</h2>
        <p>
            <strong>{props.aluno} </strong>
            Tem nota
            <strong> {props.nota} </strong>
             e foi
            <strong> {status} </strong>
        </p>
    </div>
    )
}