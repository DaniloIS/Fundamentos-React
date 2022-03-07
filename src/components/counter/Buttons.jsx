import React from "react";

export default function Buttons(props) {
    return (
        <div>
            <button onClick={props.incremento}>+</button>
            <button onClick={props.decremento}>-</button>
        </div>
    )
}