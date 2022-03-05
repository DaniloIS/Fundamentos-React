import React from 'react';

export default function Random(props) {
    const { min, max } = props;
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>{parseInt(Math.random() * (max - min) + min)}</p>  
        </div>
    ); 

}