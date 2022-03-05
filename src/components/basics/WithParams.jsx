import React from 'react';

export default function WithParams(props) {
    const status = props.note >= 7 ? "Aprovado" : "Reprovado";
    return (
        <div>
            <h2>Situação do Aluno</h2><br />
            <strong>{ props.name } </strong>
            tem nota
            <strong> { props.note } </strong>
            e está
            <strong> { status }</strong>!
        </div>
    );
}