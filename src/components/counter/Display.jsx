import React from "react";

export default function Display(props) {
    return (
        <>
            <h3>Valor: { props.number}</h3>
            <h3>Passo: { props.step}</h3>
        </>
    )
}