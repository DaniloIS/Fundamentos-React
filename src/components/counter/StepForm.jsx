import React from "react";

export default function StepFrom(props) {
    return (
        <div>
            <label htmlFor="stepInput">Valor:</label>
            <input id="numberInput" type="number" value={props.number} onChange={props.setStateNumber} />

            <label htmlFor="stepInput">Passo:</label>
            <input id="stepInput" type="number" value={props.step} onChange={props.setStateStep} />
        </div>
    )
}