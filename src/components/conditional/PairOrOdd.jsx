import React from 'react';

export default function PairOrOdd(props) {
    const isPar = props.value % 2 === 0;
    return (
        <div>
            { isPar ? <span>Par</span> : <span>Impar</span> }
        </div>
    )
}